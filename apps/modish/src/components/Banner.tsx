import { ButtonLink } from '@free-react-templates/ui'

export function Banner() {
  return (
    <section id="banner" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/modish-banner/1600/500"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-20 text-center sm:px-6">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-brand">New</span>
        <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-white/80">
          New Arrivals
        </p>
        <h2 className="mt-3 text-4xl font-bold uppercase tracking-wider text-white sm:text-5xl">
          Striped Shirts
        </h2>
        <ButtonLink
          href="#latest"
          className="mt-8 rounded-full bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-brand-dark"
        >
          Shop Now
        </ButtonLink>
      </div>
    </section>
  )
}
