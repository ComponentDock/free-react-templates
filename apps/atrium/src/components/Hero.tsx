import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-ink"
    >
      <img
        src="https://picsum.photos/seed/atrium-hero/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 pb-24 pt-32 text-center sm:px-6">
        <h1 className="text-4xl font-bold uppercase tracking-[0.18em] text-white sm:text-6xl">
          We Design Your Space
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-white/80">
          From the first sketch to the final finish, we craft thoughtful buildings and interiors for
          the way you live.
        </p>
        <div className="mt-12">
          <ButtonLink
            href="#projects"
            className="h-auto rounded-none border border-white bg-transparent px-12 py-[18px] text-sm font-normal uppercase tracking-[0.2em] text-white hover:bg-white hover:text-ink"
          >
            See Our Projects
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
