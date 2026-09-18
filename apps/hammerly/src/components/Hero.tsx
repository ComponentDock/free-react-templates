import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hammerly-hero/1920/800')" }}
    >
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <p className="mb-2 font-section text-lg uppercase tracking-widest text-brand">
          We are Hammerly
        </p>
        <h1 className="mb-6 font-heading text-5xl font-extrabold uppercase leading-tight md:text-7xl">
          We Build Dreams
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-light/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum
          amet natus quas necessitatibus.
        </p>
        <Button className="rounded bg-brand px-8 py-3 font-heading text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-brand-dark">
          Browse Services
        </Button>
      </div>
    </section>
  )
}
