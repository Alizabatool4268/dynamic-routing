import React from 'react';
import Data from "@/productsData.json";
import Image from 'next/image';

interface ProductsDetails {
  id:number,
  image:string,
  heading:string,
  Description:string,
  price:string
}

export default function Page({ params }: { params: { products: string } }) {

  {/**
    NOTE:FOR DEVELOPERS ONLY
     I have used these log statements for debugging my code. uncomment and put them at the right place for debugging your issue.
     console.log("Converted productId:", productId);
     console.log("Data.products:", Data.products);
     console.log("params.products:", params.products);
  
    */}
  const productId = parseInt(params.products);
  const product = Data.products.find(
    (proDetail: ProductsDetails) => proDetail.id === productId
  );

  if (!product) {
    console.log('Product not found');
    return (
      <section>
        <div className="text-red-500">Product not found</div>
      </section>
    );
  }

  return (
    <section className=" bg-s shadow-md rounded-lg">
      
    </section>
  );
}
