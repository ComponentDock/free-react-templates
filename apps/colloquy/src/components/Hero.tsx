import { hero, heroImage } from '../data'

export function Hero() {
  return (
    <section
      id="home-section"
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-7xl px-4 pt-52 pb-16">
        <p className="text-lg font-bold text-white">{hero.date}</p>
        <h1 className="mt-3 max-w-3xl text-5xl font-medium leading-[1.2] text-white lg:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-3 text-3xl font-medium text-white lg:text-4xl">{hero.location}</p>
        <p className="mt-5 max-w-xl text-sm font-medium leading-[2.14] text-white">{hero.blurb}</p>
        <div className="mt-[58px] flex flex-wrap gap-[10px]">
          {hero.buttons.map((button) => (
            <a
              key={button.label}
              href={button.href}
              className="flex h-[52px] w-[205px] items-center justify-center bg-gradient-to-r from-brand to-brand-light text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              {button.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
