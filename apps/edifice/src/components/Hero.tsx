import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gray-900">
      <img
        src="https://picsum.photos/seed/edifice-hero/1600/900"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:py-36">
        <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">
          Discover the Colorful World
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold uppercase leading-tight text-white sm:text-6xl">
          Build Your Dream
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-white/80">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics.
        </p>
        <ButtonLink
          href="#feature"
          className="mt-8 rounded-[5px] bg-brand px-10 font-sans text-sm font-semibold uppercase text-white hover:bg-brand-dark"
        >
          Discover Now
        </ButtonLink>
      </div>
    </section>
  )
}
