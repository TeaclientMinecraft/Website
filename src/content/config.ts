import { defineCollection, reference, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";

const news = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		pubDate: z.coerce.date(),
		banner: z.string(),
		bannerSize: z.number(),
		extraFooterClass: z.string(),
		author: reference("authors"),
	}),
});

const authors = defineCollection({
	type: "data",
	schema: z.object({
		name: z.string(),
		role: z.string(),
		img: z.string(),
		socials: z
			.object({
				personalWebsite: z.string().optional(),
				github: z.string().optional(),
				discordServer: z.string().optional(),
			})
			.optional(),
	}),
});

const policies = defineCollection({
	type: "content"
})

const docs = defineCollection({
	schema: docsSchema(),
});

export const collections = { news, authors, docs, policies };
