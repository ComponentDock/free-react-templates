import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/scholarly-hero/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary-400">
          The Best University Of The State
        </p>
        <h1 className="mb-6 font-display text-5xl font-bold text-white md:text-6xl">
          Scholarly University
        </h1>
        <Button
          variant="outline"
          className="border-2 border-white px-8 py-3 text-sm font-medium text-white hover:bg-white hover:text-ink"
        >
          Take A Tour
        </Button>
      </div>
    </section>
  )
}
