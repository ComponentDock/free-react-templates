import { heroCtaLabel, heroHeading, heroParagraph, heroSeed } from '../data'

export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[780px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(https://picsum.photos/seed/${heroSeed}/1600/900)` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/45" />
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center text-white sm:px-8">
        <h1 className="mx-auto max-w-[760px] font-heading text-[42px] font-black leading-[1.2]">
          {heroHeading}
        </h1>
        <p className="mx-auto mt-5 max-w-[620px] text-sm leading-6">{heroParagraph}</p>
        <a
          href="#"
          className="mt-10 inline-block border border-brand bg-brand px-10 text-[13px] font-medium leading-[48px] text-white transition-colors hover:bg-transparent hover:text-brand"
        >
          {heroCtaLabel}
        </a>
      </div>
    </section>
  )
}
