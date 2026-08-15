import { heroImage } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[540px] items-center justify-center overflow-hidden"
    >
      <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-light to-brand opacity-90"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="text-4xl font-extralight uppercase leading-[1.25em] text-white md:text-5xl">
          <span className="font-semibold">Pixora</span>
          <br />
          What else do you need?
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base font-light text-white/95">
          We craft clean, minimal websites and visual stories — every detail considered, nothing
          left to chance. Tell us what you need and we will make it beautiful.
        </p>
      </div>
    </section>
  )
}
