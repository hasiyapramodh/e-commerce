function Hero() {
  return (
    <>
      <section className="container h-1/5  m-auto ">
        <div className="grid    md:grid-cols-2 min-h-[60vh] bg-[#f4f8f9] rounded-md shadow-md">
          <div className="flex py-5 md:py-0 justify-center px-10 flex-col gap-y-4">
            <span className="rounded-full  bg-yellow-500 px-2 w-fit">
              WEEKLY DISCOUNT
            </span>
            <h1 className="md:text-6xl text-4xl font-semibold font-roboto  ">
              Premium Product Online Shop
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              non alias ratione dolores, est unde hic cumque enim mollitia iure,
              possimus recusandae maiores libero placeat accusantium quam,
              pariatur maxime molestias?
            </p>
            <a href="/" className="bg-black text-white w-fit py-2 px-3 rounded-md ">Shop Now</a>
          </div>
          <div className="relative ">
            <img
              src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
              className="h-full w-full object-cover "
            ></img>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
