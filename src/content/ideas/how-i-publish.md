---
title: How I Publish Ideas on This Site
description: My workflow for turning thoughts into published content using GitHub Copilot and CI/CD automation.
pubDate: 2026-02-17
author: Jędrzej Pluciński
tags:
  - Meta
  - Workflow
  - Automation
  - GitHub Copilot
category: Process
draft: false
---

Building and maintaining a personal site should be effortless. Here's my streamlined workflow for publishing ideas—from initial thought to live content.

## The Workflow

My publishing process is intentionally simple, leveraging automation and AI assistance to focus on what matters: the ideas themselves.

### 1. Capture the Idea

When inspiration strikes, I write my thoughts on platforms like **Medium** or **Substack**. These platforms are great for drafting and initial feedback, but I want my content to live on my own domain.

### 2. Create a GitHub Issue

Once I've published a note, I create an issue in this repository. The issue description includes:
- A link to the published article
- A request for GitHub Copilot to create a summary or adaptation for this site

This approach keeps everything tracked and documented in my repository.

### 3. Let Copilot Handle the Heavy Lifting

I assign the issue to GitHub Copilot. The AI agent:
- Reads the linked article
- Creates a new idea page following my site's format
- Generates appropriate frontmatter with tags and categories
- Crafts a summary or teaser that fits the minimal design aesthetic

### 4. Review and Merge

I review Copilot's work to ensure:
- The content accurately represents my ideas
- The formatting matches my design system
- The summary is concise and effective

Once satisfied, I merge the pull request.

### 5. CI/CD Takes Over

After merging, my continuous integration and deployment pipeline:
- Builds the static site with Astro
- Runs any necessary checks
- Deploys the updated site automatically

## Why This Works

This workflow strikes a balance between flexibility and automation:

- **Write Anywhere**: I can draft on platforms with strong editing tools and communities
- **No Manual Formatting**: Copilot handles the conversion to my site's format
- **Version Controlled**: Every change is tracked through Git
- **Fully Automated**: From merge to deployment happens without intervention
- **Focus on Content**: I spend time on ideas, not infrastructure

## Tools Involved

- **Medium/Substack**: Initial drafting and writing
- **GitHub Issues**: Task tracking and content pipeline
- **GitHub Copilot**: AI-assisted content transformation
- **Astro**: Static site generation
- **GitHub Actions**: CI/CD automation

This meta-workflow is itself a demonstration of the process. If you're reading this on my site, it means the workflow worked perfectly.
