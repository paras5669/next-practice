import { Metadata } from "next"

// export const generateMetadata = ({params}:Props):Metadata => {
//     return {
//         title:`Product Page ${params.productId}`
//     }
// }

export const generateMetadata = async ({params}:Props):Promise<Metadata> => {
    let  titles= await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fetched "+params.productId);
        },10000)
    });
    return {
        title:`Product ${titles}`
    }
}


type Props = {
    params: {
        productId: string
    }
}
export default function Product({params}: {params: {productId: string}}) {
    return (
<>    

    <h1 className="text-3xl font-bold underline">Product {params.productId}</h1>
    </>
);

}