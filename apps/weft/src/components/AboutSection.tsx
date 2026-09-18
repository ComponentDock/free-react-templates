export function AboutSection() {
  return (
    <div className="bg-white px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative mb-8 text-2xl font-medium text-heading lg:text-3xl">
          About Us
          <span className="absolute bottom-[-10px] left-[2px] h-[2px] w-[30px] bg-accent" />
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed text-text">
              Weft is a creative agency that specializes in building distinctive brands and digital
              experiences. Our team of designers, developers, and strategists work together to
              create work that stands out in the digital landscape.
            </p>
            <p className="leading-relaxed text-text">
              We believe in the power of thoughtful design to transform businesses and connect with
              audiences in meaningful ways. Every project is an opportunity to push boundaries and
              create something truly unique.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://picsum.photos/seed/weft-about/600/400"
              alt="About Weft creative agency"
              className="w-full rounded object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
