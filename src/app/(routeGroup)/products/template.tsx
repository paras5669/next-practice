"use client"
import { useState } from "react"
export default function ProdLayout({children}: {children: React.ReactNode}) {
    const [input, setInput]= useState("");
    return <>{children}
    <h3>Prod Layout</h3>
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} />
    </>
}