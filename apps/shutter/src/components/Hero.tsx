export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src="https://picsum.photos/seed/shutter-hero/1920/1080"
        alt="Mountain landscape at sunset"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/35"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 pb-16 pt-32 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Capturing Moments That Last Forever
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/85">
          Fine art and documentary photography that tells your story with authenticity and grace.
        </p>
        <a
          href="#portfolio"
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full border border-white/60 px-8 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-primary-900"
        >
          View Portfolio
        </a>
      </div>
    </section>
  )
}
