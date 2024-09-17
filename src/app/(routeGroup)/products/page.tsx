import Link from "next/link";

export default function Products() {
    return (<><h1 className="text-3xl font-bold underline">Products</h1>
    <Link href={"/products/1"}>Product 1</Link>
    <Link href={"/products/2"}>Product 2</Link>
    <Link href={"/products/3"} replace>Product 3</Link>
    </>);
}