import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gray-900"
    >
      <img
        src="https://picsum.photos/id/1081/1920/1280"
        alt="White church building with a cross against a grey sky"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-32 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold sm:text-sm">
          Vesper Church
        </span>
        <h1 className="mt-5 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Following <span className="text-gold">Jesus</span> wherever we are
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-200 sm:text-lg">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
          the Semantics, a large language ocean.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink
            href="#about"
            className="rounded bg-gold px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gold-dark"
          >
            Be part of us
          </ButtonLink>
          <ButtonLink
            href="#about"
            variant="outline"
            className="rounded border-white bg-transparent px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Read more
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
