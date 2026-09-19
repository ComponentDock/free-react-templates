export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="relative flex-1">
            <img
              src="https://picsum.photos/seed/stall-about/600/400"
              alt="About our store"
              className="w-full object-cover"
              width={600}
              height={400}
            />
            <div className="absolute -bottom-6 -right-6 bg-brand px-6 py-4 shadow-lg">
              <p className="text-2xl font-black text-white">50+</p>
              <p className="text-sm font-bold text-white">Trusted Merchant for 50 years</p>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-black uppercase tracking-wide text-heading">
              Why Choose Us
            </h2>
            <div className="mt-2 h-1 w-16 bg-brand" />
            <p className="mt-6 text-body">
              We have been serving customers for over five decades, providing quality products and
              exceptional service. Our commitment to excellence has made us a trusted name in the
              industry.
            </p>
            <p className="mt-4 text-body">
              From the finest materials to expert craftsmanship, every product we offer is designed
              to exceed your expectations. Discover the difference quality makes.
            </p>
            <a
              href="#about-more"
              className="mt-8 inline-block rounded-none bg-gray-900 px-8 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-brand"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
