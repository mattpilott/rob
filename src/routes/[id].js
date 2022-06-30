import { createClient } from 'contentful'

const client = createClient({
   space: import.meta.env.VITE_SPACE,
   accessToken: import.meta.env.VITE_TOKEN
 })

export async function get({params: { id }}) {
   return { body: (await client.getEntry(id)).fields }
}