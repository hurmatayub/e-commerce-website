import React from "react";

const cardData = [
  {
    id: 1,
    img: "/Home decor.jpg",
    title: "Pots",
  },
  {
    id: 2,
    img: "/Vase.jpg",
    title: "Vase",
  },
  {
    id: 3,
    img: "/Plates.jpg",
    title: "Plates",
  },
  {
    id: 4,
    img: "/Cups.jpg",
    title: "Cups",
  },
];
const Products: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="hidden sm:flex flex-wrap justify-center items-center mt-20 -m-1 gap-9 ">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col items-center -m-1">
            <div className="shadow-md w-[255px] h-[255px] overflow-hidden">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mt-4">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
      <div className="flex sm:hidden mt-20 overflow-x-scroll gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col items-center flex-shrink-0 space-x-9"
          >
            <div className=" shadow-md w-[255px] h-[255px]">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-center mt-4">
              {card.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
