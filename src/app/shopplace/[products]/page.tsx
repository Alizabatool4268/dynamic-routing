import React from 'react';
import Data from "@/productsData.json";
import Image from 'next/image';


interface PageProps {
  params: Promise<{
    products: string;
  }>;
}
interface ProductsDetails {
  id:number,
  image:string,
  heading:string,
  Description:string,
  price:string
}


export default async function Page({ params }:PageProps ) {

  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.products);
  if (isNaN(productId)) {
  return <div>Invalid product ID</div>;
}
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
    <section className=" bg-white shadow-md rounded-lg overflow-x-hidden">
        <h1 className='text-[30px] font-bold text-center'>{product.heading}</h1>
      <div className='flex justify-center items-center flex-col'>
        <div className='grid grid-cols-3 grid-rows-2 w-[450px] gap-1 ssm:w-[300px] xsm:w-[280px]'>
         <span className='bg-slate-300 border-[1px] border-solid border-black rounded-sm '><Image height={150} width={150} alt={product.heading} src={product.image}></Image></span>
         <span className='bg-slate-100 row-span-2 col-span-2 flex justify-center items-center border-[1px] border-solid border-black rounded-sm'><Image height={250} width={250} alt={product.heading} src={product.image}></Image></span>
         <span className='bg-slate-300 border-[1px] border-solid border-black rounded-sm '><Image height={150} width={150} alt={product.heading} src={product.image}></Image></span>
        </div>
        <div className='flex flex-col justify-center w-[450px] ssm:items-center xsm:items-center'>
          <p className='text-[28px] font-semibold xsm:text-[16px] '>{product.Description}</p>
          <h5>Price : {product.price}</h5>
          <h6 className='text-blue-500 text-[30px] font-bold'>OFFER</h6>
          <p className='ssm:text-sm xsm:text-[12px]'>Purchasing this {product.heading} in this period <br className='sm:hidden'/>of time will provide you with a bundle of offers </p>
           <ul className='list-disc'>
            <li className='ssm:text-sm xsm:text-[12px]'>You will get upto 20% off</li>
            <li className='ssm:text-sm xsm:text-[12px]'>No shipping charges</li>
            <li className='ssm:text-sm xsm:text-[12px]'>Product will be delivered with in 3 bussiness days</li>
           </ul>
        </div>
      </div>
    </section>
  );
}

// console.log("Converted productId:", productId);
// console.log("Data.products:", Data.products);
// console.log("params.products:", params.products);