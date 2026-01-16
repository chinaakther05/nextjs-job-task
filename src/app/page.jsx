import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
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

    </div>
  );
}
