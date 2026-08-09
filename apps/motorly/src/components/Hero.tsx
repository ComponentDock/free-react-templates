import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="bg-cover bg-center py-28 text-white sm:py-40"
      style={{ backgroundImage: "url('https://picsum.photos/seed/motorly-1/1600/900')" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
            Welcome To Motorly Garage
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            It is a long established fact that a reader will be distracted by the readable content
            of a page when looking at its layout.
          </p>
          <Button
            className="mt-8 rounded bg-brand px-8 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            size="lg"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
