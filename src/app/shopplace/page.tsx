import React from 'react';
import data from "@/productsData.json";
import Image from 'next/image';
import Link from 'next/link';
function Page() {
  return (
    <section className='flex flex-col'>
      <h1  className="text-4xl text-black font-bold text-center mt-7 ">shop</h1>
      <div className='grid grid-cols-2 grid-rows-3 '>
        {data.products.map((productsData)=>(
          <div className='flex justify-center items-center flex-col' key={productsData.id}>
            <div className='w-[250px] border-[1px] border-black border-solid'>
              <div className='flex flex-col justify-center items-center bg-slate-200'>
              <Image height={150} width={150} alt={productsData.heading} src={productsData.image}></Image>
              </div>
              <span className='flex justify-center items-center flex-col'>
              <h2 className='font-bold'>{productsData.heading} </h2>
              <p>{productsData.Description}</p>
              <p>{productsData.price}</p>
              <Link href={`/shopplace/${productsData.id}`}  className='h-[40px] flex justify-center items-center w-[170px] rounded-md mb-1 bg-black text-white'>View Details</Link>  
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Page;