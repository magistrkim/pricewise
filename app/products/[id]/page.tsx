import { getProductById } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);
  if (!product) redirect("/");
  return (
    <div className="product-container">
      <div className="flex gap-28 flex-col xl:flex-row">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex gap-3 flex-col">
              <h3 className="text-[28px] text-secondary font-semibold">
                {product.title}
              </h3>
              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
