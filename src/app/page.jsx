import Banner from "@/components/home/Banner";
import BlogSection from "@/components/home/BlogSection";
import Features from "@/components/home/Features";


import Reviews from "@/components/home/Reviews";
import Support from "@/components/home/Support";

import { getServerSession } from "next-auth";


export default async function Home() {
  const session=await getServerSession();
  return (
    <div className='space-y-20' >
      
      
     <section>
       <Banner></Banner>
     </section>
    
      <session>
      <BlogSection></BlogSection>
    </session>

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
