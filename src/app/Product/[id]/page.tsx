"use client";
import React, { useState } from "react";
import { cardData } from "@/app/components/cardData";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface ProductPageProps {
  params: { id: string };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const productId = parseInt(params.id);
  const product = cardData.find((item) => item.id === productId);

  if (!product) {
    return <p>Product not found!</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const renderRatingStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(<FaStar className="text-yellow-500" />)
          .map((star, index) => (
            <span key={`full-${index}`}>{star}</span>
          ))}
        {Array(halfStars)
          .fill(<FaStarHalfAlt className="text-yellow-500" />)
          .map((star, index) => (
            <span key={`half-${index}`}>{star}</span>
          ))}
        {Array(emptyStars)
          .fill(<FaRegStar className="text-yellow-500" />)
          .map((star, index) => (
            <span key={`empty-${index}`}>{star}</span>
          ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <div className="mt-4 flex flex-col sm:flex-row">
        <div className="sm:w-1/2">
          <img
            src={product.img}
            alt={product.imgDescription}
            className="object-cover w-[535px] h-[701px]"
          />
        </div>
        <div className="sm:w-1/2 sm:ml-6 mt-6 sm:mt-0">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-lg mt-2">{product.description}</p>

          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Reviews</h2>
            <div className="mt-2">{renderRatingStars(product.rating)}</div>
          </div>

          <p className="mt-4 font-semibold">Price: ${product.price.new}</p>
          <p className="text-gray-500 line-through">
            Old Price: ${product.price.old}
          </p>
          <p className="mt-2 text-green-600">Stock: {product.stock}</p>

          <div className="mt-4">
            <p className="font-semibold">Color: {selectedColor}</p>
            <div className="flex space-x-2 mt-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className={`w-8 h-8 border ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center">
            <div className="flex items-center border border-[#3A3845]">
              <button
                className="text-black w-10 h-10 flex justify-center items-center"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <p className="mx-4 text-xl">{quantity}</p>
              <button
                className="text-black w-10 h-10 flex justify-center items-center"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            <button
              className="text-white bg-[#3A3845] w-[204px] h-[48px] ml-4"
              disabled={!product.actions.addToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-4 flex space-x-2">
            <button
              className="text-[#3A3845] border border-[#3A3845] w-[286px] h-[48px]"
              disabled={!product.actions.buyNow}
            >
              Buy Now
            </button>
            <div className="w-[48px] h-[48px] border border-[#3A3845] flex items-center justify-center">
              <Image src="/Heart.png" alt="Heart" width={24} height={24} />
            </div>
          </div>

          <div className="w-[344px] h-[52px] mt-5">
            <p className="w-[101px] h-[12px] text-[#3A3845] font-semibold">
              Share this:
            </p>
            <div className="flex justify-start items-center space-x-4 mt-5">
              <Image
                src="/Facebook.png"
                alt="Facebook"
                width={10}
                height={18}
              />
              <Image src="/Twitter.png" alt="Twitter" width={20} height={18} />
              <Image
                src="/Instagram.png"
                alt="Instagram"
                width={20}
                height={18}
              />
              <Image
                src="/Linkedin.png"
                alt="LinkedIn"
                width={20}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
