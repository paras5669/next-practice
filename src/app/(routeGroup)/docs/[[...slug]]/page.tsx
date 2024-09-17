export default function Docs({params}:{params:{slug:string[]}}) {

    // [...slugs] or [[...slug]] just [[]] allows docs/  to display page , [] send /docs to 404  

    // Handling undefined slugs or empty arrays.
  if (!params.slug || params.slug.length === 0) {
    return <h1 className="text-3xl font-bold underline">No Slug Provided</h1>;
  }
    return (
        <>
     {params.slug?.map((a,index)=>{
         return <h1 key={index} className="text-3xl font-bold underline">Docs Slug with doube brackets</h1>
     })}   
     </>

);
}