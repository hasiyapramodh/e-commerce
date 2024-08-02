import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      categoryId: "1",
      image: "/src/assets/products/airpods-max.png",
      id: "1",
      name: "AirPods Max",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/src/assets/products/echo-dot.png",
      id: "2",
      name: "Echo Dot",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "2",
      image: "/src/assets/products/pixel-buds.png",
      id: "3",
      name: "Galaxy Pixel Buds",
      price: "99.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "1",
      image: "/src/assets/products/quietcomfort.png",
      id: "4",
      name: "Bose QuiteComfort",
      price: "249.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "3",
      image: "/src/assets/products/soundlink.png",
      id: "5",
      name: "Bose SoundLink",
      price: "119.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "5",
      image: "/src/assets/products/apple-watch.png",
      id: "6",
      name: "Apple Watch 9",
      price: "699.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/src/assets/products/iphone-15.png",
      id: "7",
      name: "Apple Iphone 15",
      price: "1299.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
    {
      categoryId: "4",
      image: "/src/assets/products/pixel-8.png",
      id: "8",
      name: "Galaxy Pixel 8",
      price: "549.00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, sequi?",
    },
  ];
  return (
    <>
      <div className="container m-auto py-8">
        <h1 className="text-4xl font-normal">Our Top Products</h1>
        <div className="border mt-3"></div>
        <div className="mt-5 grid grid-cols-4 gap-x-4 gap-y-8">
          {products.map((el) => {
            return (
              <ProductCard
                key={el.id}
                image={el.image}
                name={el.name}
                price={el.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
