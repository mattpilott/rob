<script>
   export let Image
   export let Title
   export let Body
</script>

<img src={Image?.fields?.file?.url} alt={Image?.fields?.title} />
<h1>{Title}</h1>
{Body}
