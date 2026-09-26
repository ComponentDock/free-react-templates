export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <img
          src="https://picsum.photos/seed/lenscraft-about/600/700"
          alt="Photographer portrait"
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-snug text-gray-900 md:text-4xl">
            Let's
            <br />
            Introduce About Myself
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Up my excuse to suffer ladies though or. Bachelor possible out marianne directly
            confined relation as on he.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Lose john poor same it case do year we. Full how way even the sigh. Extremely nor
            furniture fat one questions now provision then doing for.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-coral-400 px-8 text-sm font-medium text-gray-900 transition-colors hover:bg-coral-400 hover:text-white"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}
