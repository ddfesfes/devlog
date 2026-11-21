
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().default("General"),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    number: z.string(),
    name: z.string(),
    category: z.string(),
    description: z.string(),
    tech: z.array(z.string()),
    link: z.string().default("#"),
    image: z.string().default(""),
  }),
});

export const collections = {
  blog,
  projects,
};
