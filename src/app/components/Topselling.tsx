import React from "react";
import { cardData } from "./cardData";
import Link from "next/link";
import Image from "next/image";

const Topselling: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 lg:mt-44">Top Selling</h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 m-0 lg:m-[350px] mt-20 lg:mt-20">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col items-center">
            <div className="shadow-md w-[180px] sm:w-[200px] lg:w-[255px] h-[250px] sm:h-[250px] lg:h-[321px] overflow-hidden">
              <Link href={`/Product/${card.id}`}>
                <Image
                  src={card.img}
                  alt={card.title}
                  width={255}
                  height={255}
                  className="object-cover w-full h-full"
                />
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-center mt-4">
              {card.title}
            </h3>

            <button className="mt-4 py-[18px] px-[30px] lg:px-20 border border-black text-black ">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topselling;
