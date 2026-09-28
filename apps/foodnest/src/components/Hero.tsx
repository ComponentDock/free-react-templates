export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/foodnest-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
          Enjoy Your Food at Foodnest
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200">
          Discover the finest dining experience with our handcrafted dishes, made from the freshest
          ingredients by our world-class chefs.
        </p>
        <a
          href="#services"
          className="inline-block border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
