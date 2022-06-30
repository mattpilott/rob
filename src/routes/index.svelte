<script context="module">
   export async function load({ fetch }) {
      const res = await fetch(`/serve.json`)

      if (!res.ok) return { status: res.status }

      return { props: (await res.json()).fields }
   }
</script>

<script>
   export let Image
   export let Title
   export let Body
</script>

<img src={Image.fields.file.url} alt={Image.fields.title} />
<h1>{Title}</h1>
{Body}
