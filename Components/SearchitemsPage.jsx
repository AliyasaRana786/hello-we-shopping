import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { items } from "./Data";
import ProductPage from "./ProductPage";
import '../CSS/SearchitemsPage.css';
export default function SearchitemsPage(){
    const[data,setData]=useState([]);
    const {term}=useParams();
   

    useEffect(()=>{
const element=items.filter((product)=>product.category.toLowerCase().includes(term.toLocaleLowerCase()));
setData(element);
    },[term])
    return(
        <section className="container searchitem">
            <ProductPage items={data}/>
        </section>
    )
}