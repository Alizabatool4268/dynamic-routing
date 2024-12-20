import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="h-[500px] flex justify-around items-center ">
       <div>
        <h1 className="text-4xl font-bold text-center mt-7 ">Shop Now</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing <br /> Optio sint voluptas laborum facilis asperiores.</p>
       </div>
        <Image height={420} width={420} src={"/Images/bedroom-2.png"} alt="heroimage"></Image>
    </main>
  );
}
