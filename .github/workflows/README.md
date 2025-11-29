# GitHub Actions - Deployment Workflow

## Setup Instructions

### Required GitHub Secrets

You need to add these secrets to your GitHub repository:

1. Go to: **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

2. Add the following secrets:

| Secret Name | Description | Example Value |
|------------|-------------|---------------|
| `FTP_SERVER` | Your SEOhost FTP server address | `ftp.yourdomain.com` |
| `FTP_USERNAME` | Your FTP username | `user@yourdomain.com` |
| `FTP_PASSWORD` | Your FTP password | `your-secure-password` |

### How to Add Secrets

```bash
# Navigate to your GitHub repository
# Go to: Settings → Secrets and variables → Actions
# Click: "New repository secret"
# Add each secret above
```

## Workflow Triggers

The workflow runs on:
- ✅ **Push to `main` branch** - Builds, deploys, and creates release
- ✅ **Merged Pull Requests to `main`** - Builds, deploys, and creates release

## What the Workflow Does

1. **Checkout** - Gets your code
2. **Setup Node.js** - Installs Node.js 20
3. **Install Dependencies** - Runs `npm ci`
4. **Build** - Runs `npm run build` (creates `dist/` folder)
5. **Version Bump** - Automatically increments patch version (1.0.0 → 1.0.1)
6. **FTP Deploy** - Uploads `dist/` to SEOhost `/public_html/`
7. **Create Release** - Creates GitHub release with tag (e.g., `v1.0.1`)

## Version Management

The workflow automatically increments the **patch version** on each deployment:
- `1.0.0` → `1.0.1` → `1.0.2` → etc.

To manually set a version:
```bash
npm version 2.0.0 --no-git-tag-version
git add package.json
git commit -m "chore: bump to v2.0.0"
git push
```

## FTP Directory Structure

Make sure your SEOhost FTP directory is set up:
```
/public_html/
  ├── index.html (from dist/)
  ├── _astro/
  ├── images/
  └── ... (other built files)
```

Adjust `server-dir` in the workflow if your directory is different.

## Testing the Workflow

1. Make a change to your code
2. Commit and push to `main`:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin main
   ```
3. Check the **Actions** tab in GitHub to see the workflow running

## Troubleshooting

### FTP Connection Issues
- Verify FTP credentials in GitHub Secrets
- Check if your SEOhost allows FTP connections
- Some hosts require FTPS - update workflow if needed

### Build Failures
- Check Node.js version compatibility
- Verify all dependencies are in `package.json`
- Review build logs in GitHub Actions

### Permission Issues
- Ensure FTP user has write permissions to `/public_html/`
- Check file ownership on server

## Customization

### Change deployment directory
Edit `server-dir` in `.github/workflows/deploy.yml`:
```yaml
server-dir: /public_html/yoursubfolder/
```

### Use FTPS instead of FTP
Add to FTP-Deploy-Action step:
```yaml
protocol: ftps
```

### Change version increment strategy
Edit the "Generate new version" step to increment minor or major versions instead.
