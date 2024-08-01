import { ShoppingCart } from "lucide-react";

function Navigation() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center container px-10 md:px-0 m-auto h-[5rem] ">
          <div className="flex  items-center">
            <div className="pr-[4rem]">
              <h1 className="text-3xl font-sans font-bold ">Mebius</h1>
            </div>
            <div className="flex gap-x-8">
              <p>Home</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="flex items-center gap-x-8">
            <div className="flex gap-x-4">
              <ShoppingCart />
              <p> cart</p>
            </div>

            <p>Hi,Hasitha</p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
