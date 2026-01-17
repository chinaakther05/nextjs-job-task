import Image from "next/image";
import items from "@/data/items.json"
import { FaCartPlus } from "react-icons/fa";
import CartButton from "@/components/Buttons/Cartbutton";



// ✅ Page must be async
const ProductDetailPage = async ({ params }) => {
  const { id } = await params; // now params is unwrapped automatically in async page

const productsData = await items
console.log(productsData)


  const product = productsData.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500">
        Product not found
      </p>
    );
  }

  return (
    <div className="flex  md:flex-row gap-6 items-start max-w-4xl mx-auto py-10 px-4">
      {/* Left - Image */}
      <div className=" w-full md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={300}
          className="object-cover"
        />
      </div>

      {/* Right - Details */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-lg font-bold">Price: ৳ {product.price}</p>
        <p>Rating: {product.rating} ({product.reviews} reviews)</p>
        <p>{product.description}</p>

       {/* Action */}
       <CartButton product={product}></CartButton>
       
      </div>
    </div>
  );
};

export default ProductDetailPage;
