import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
    thumbnail: z.string(),
    summary: z.string().optional(),
    badge: z.string().default('Project'),
    periodEn: z.string().optional(),
    periodKo: z.string().optional(),
  }),
});

export const collections = { projects };
