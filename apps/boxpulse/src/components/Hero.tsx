export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[70vh] items-center justify-center bg-brand-dark pt-20 text-center"
    >
      <div className="mx-auto max-w-[1170px] px-4 py-20">
        <p className="mb-4 font-heading text-sm font-medium uppercase tracking-[0.3em] text-text-light">
          Creative Digital Agency
        </p>
        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl">
          We Craft Awesome Web And <span className="text-brand-green">Graphic Design</span>{' '}
          Solutions
        </h1>
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-text-light">
          Delivering innovative digital experiences that transform brands and drive business growth
          through strategic design and cutting-edge technology.
        </p>
      </div>
    </section>
  )
}
