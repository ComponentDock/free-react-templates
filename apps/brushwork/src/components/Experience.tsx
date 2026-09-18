export function Experience() {
  return (
    <section id="about" className="bg-white py-20 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/seed/brushwork-exp1/400/500"
            alt="Crafting experience"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <img
            src="https://picsum.photos/seed/brushwork-exp2/400/350"
            alt="Talent showcase"
            className="absolute -bottom-6 -right-6 w-2/3 rounded-2xl object-cover shadow-xl sm:w-1/2"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">
            From the root of experience We dig out the best talent
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist">
            We believe that true artistry comes from deep experience and passion. Our team of
            skilled professionals brings together years of expertise in art, crafting, and creative
            design to deliver exceptional results for every project.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist">
            Whether it is painting, sculpting, or digital artistry, we approach each creation with
            dedication and a commitment to excellence that sets us apart.
          </p>
          <div className="mt-8">
            <a
              href="#about"
              onClick={(e) => e.preventDefault()}
              className="inline-block rounded-full border-2 border-brand px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
