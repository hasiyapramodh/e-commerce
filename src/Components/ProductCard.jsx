import { useState } from "react";
import { Heart } from "lucide-react";

function ProductCard(props) {
  const [isLiked, setIsLiked] = useState(false);

  const handleclick = () => {
    if (isLiked) {
      setIsLiked(false);
    } else {
      setIsLiked(true);
    }
  };

  return (
    <>
      <div className=" relative rounded-md shadow-sm">
      {isLiked ? (
            <Heart
              className="absolute top-2 right-2 cursor-pointer  z-10 fill-red-500 text-red-500"
              onClick={handleclick}
            />
          ) : (
            <Heart
              className="absolute top-2 right-2 cursor-pointer text-red-500 z-10"
              onClick={handleclick}
            />
          )}
        <div className="flex justify-center bg-slate-50 h-[15rem]  object-cover">
         

          <img src={props.image} className="object-cover w-full h-full" />
        </div>
        <div className="flex justify-between mt-4">
          <p className="text-2xl normal">{props.name}</p>
          <p className="font-bold">${props.price}</p>
        </div>
        <div className="mt-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="my-5">
          <a
            className=" text-xl rounded-md text-black border-black border-2 p-1 px-2 font-semibold"
            href=""
          >
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
