import Banner from "@/components/home/Banner";
import Features from "@/components/home/Features";

import Products from "@/components/home/Products";
import Reviews from "@/components/home/Reviews";
import Support from "@/components/home/Support";
import Test from "@/components/Test";
import { getServerSession } from "next-auth";


export default async function Home() {
  const session=await getServerSession();
  return (
    <div className='space-y-20' >
      <Test></Test>
      
     <section>
       <Banner></Banner>
     </section>
    <section>
      <Products></Products>
    </section>
    <session>
      <Features></Features>
    </session>
    <session>
      <Reviews></Reviews>
    </session>
    <session>
      <Support></Support>
    </session>


    </div>
  );
}
