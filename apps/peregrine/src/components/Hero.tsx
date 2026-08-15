import { heroText, heroTitle } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-screen items-center"
      aria-label="Hero"
    >
      <img
        src="https://picsum.photos/seed/peregrine-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-br from-[#6b75ff] to-[#59b7ff] opacity-30"
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] justify-end px-6">
        <div className="max-w-xl py-40 text-right">
          <h1 className="text-5xl font-bold leading-[1.2] text-white md:text-[64px]">
            {heroTitle}
          </h1>
          <p className="mb-4 mt-6 text-base leading-[1.8] text-white">{heroText}</p>
        </div>
      </div>
    </section>
  )
}
