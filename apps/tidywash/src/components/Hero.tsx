import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" aria-label="Hero" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/tidywash-hero/1920/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-36">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-400">
          Introducing TidyWash
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl">
          A Clean Home is A Happy Home
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#about"
            className="rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Request A Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
