import Image from "next/image";

export default function Home() {
  return (
    <main>
       <div className="h-screen flex justify-around items-center bg-slate-300 ">
        <div>
         <h1 className="text-4xl font-bold text-center mt-7 ">Shop Now</h1>
         <p className="">Lorem ipsum dolor sit amet consectetur adipisicing <br /> Optio sint voluptas laborum facilis asperiores.</p>
        </div>
        <Image height={420} width={420} src={"/Images/bedroom-2.png"} className="rounded-sm" alt="heroimage"></Image>
        </div>
    </main>
  );
}
