export function About() {
  return (
    <section id="about" className="bg-obsidian py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-primary-400">About Us</h2>
          <p className="mt-4 text-xl text-gray-300">Our Tattoos Last Longer Than Most Marriages.</p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/inkvibe-about1/600/400"
              alt="Tattoo artist at work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-gray-400 leading-relaxed">
              With over a decade of experience, our studio has been the go-to destination for tattoo
              enthusiasts seeking quality, creativity, and professionalism. We believe every tattoo
              tells a story, and our job is to make sure yours is unforgettable.
            </p>
            <p className="mt-4 text-gray-400 leading-relaxed">
              From minimalist designs to full sleeves, our talented artists specialize in a wide
              range of styles including traditional, realism, geometric, watercolor, and custom
              lettering.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
