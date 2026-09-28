import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative h-[600px] overflow-hidden bg-surface">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/corkage-hero/1600/900)' }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-4 font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Fresh And Delicious Food
          <br />
          For Your Health
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-300">
          Experience the finest Indian cuisine crafted with passion and tradition
        </p>
        <ButtonLink
          href="#menu"
          className="rounded bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-brand-dark"
        >
          View Menus
        </ButtonLink>
      </div>
    </section>
  )
}
