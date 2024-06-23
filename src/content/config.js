import { z, defineCollection } from "astro:content"

const footerColumnOneCollection = defineCollection({

	schema: z.object({

		live: z.boolean(),
		order: z.number(),
		title: z.string(),
        link: z.string().optional(),

	})

})

export const collections = {

	"footer-column-one": footerColumnOneCollection,

}
