import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/shingle-hero/1600/900"
          alt="Professional roofing work"
          className="h-full w-full object-cover opacity-40"
        />
      </div>
      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:py-36">
        <div className="max-w-2xl text-center text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
            We are the best Roofing Services
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Dedicated to providing the highest quality roofing services
          </h1>
          <div className="mt-8">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full bg-brand px-8 uppercase tracking-wider hover:bg-brand-dark"
            >
              Book an Appointment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
