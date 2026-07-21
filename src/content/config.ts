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
  }),
});

export const collections = { projects };
