export function About() {
  return (
    <section id="about" aria-label="About" className="bg-white py-[100px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/id/2/1200/900"
            alt="A laptop and workspace setup on a desk"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-sm font-medium uppercase tracking-wider text-brand">About Us</span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-[-2px] text-navy-deep">
            Build your amazing website with Netora
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            From first wireframe to global launch, we design and run the digital platforms behind
            ambitious companies. Our engineers pair sharp architecture with everyday pragmatism, so
            the technology stays out of your way and your team keeps shipping.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            Whether you are modernizing a legacy stack, moving to the cloud, or starting from a
            blank page, we deliver systems that scale cleanly, stay secure by default, and give you
            full visibility into every layer.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block bg-brand px-9 py-4 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
