import { defineCollection, z } from 'astro:content';

const ideas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Jędrzej Pluciński'),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    featuredImage: z.string().optional(),
    draft: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      keywords: z.array(z.string()).optional(),
      ogImage: z.string().optional(),
    }).optional(),
  }),
});

const resume = defineCollection({
  type: 'data',
  schema: z.object({
    skills: z.object({
      frontend: z.array(z.string()),
      backend: z.array(z.string()),
      tools: z.array(z.string()),
      softSkills: z.array(z.string()).optional(),
    }).optional(),
    certifications: z.array(z.object({
      name: z.string(),
      issuer: z.string(),
      date: z.coerce.date(),
      url: z.string().url().optional(),
    })).optional(),
    education: z.array(z.object({
      degree: z.string(),
      institution: z.string(),
      location: z.string(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      description: z.string().optional(),
    })).optional(),
    languages: z.array(z.object({
      language: z.string(),
      proficiency: z.string(),
    })).optional(),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    email: z.string().email(),
    location: z.string().optional(),
    social: z.object({
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      twitter: z.string().url().optional(),
    }).optional(),
    seo: z.object({
      defaultDescription: z.string(),
      defaultKeywords: z.array(z.string()).optional(),
    }).optional(),
    copyright: z.string().optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    heroTitle: z.string().optional(),
    heroSubtitle: z.string().optional(),
    heroDescription: z.string().optional(),
    ctaPrimary: z.string().optional(),
    ctaSecondary: z.string().optional(),
    ctaPrimaryLink: z.string().optional(),
    ctaSecondaryLink: z.string().optional(),
    featuredTitle: z.string().optional(),
    featuredSubtitle: z.string().optional(),
    featuredDescription: z.string().optional(),
    professionalSummary: z.string().optional(),
    bio: z.string().optional(),
    frontendSkills: z.string().optional(),
    backendSkills: z.string().optional(),
    experience: z.array(z.object({
      period: z.string(),
      company: z.string(),
      position: z.string(),
      technologies: z.string().optional(),
      responsibilities: z.array(z.string()),
    })).optional(),
    education: z.string().optional(),
    languages: z.string().optional(),
    contactText: z.string().optional(),
  }),
});

export const collections = { ideas, resume, site, pages };

