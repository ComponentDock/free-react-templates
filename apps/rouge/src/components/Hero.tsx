import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center">
      <img
        src="https://picsum.photos/seed/rouge-hero/1920/1080"
        alt="Rouge salon interior"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-32 text-center text-white sm:px-6">
        <h1 className="font-sans text-5xl font-bold uppercase leading-tight tracking-wide sm:text-6xl">
          Be bold.
          <br />
          Be beautiful.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/85 sm:text-lg">
          Premium hair dressing, spa treatments and beauty rituals — crafted to bring out your most
          confident self.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button className="min-w-[180px] rounded-full bg-rouge-600 px-8 py-3 font-semibold uppercase tracking-wide text-white hover:bg-rouge-700">
            Make an appointment
          </Button>
          <Button
            variant="outline"
            className="min-w-[180px] rounded-full border-2 border-white/80 bg-transparent px-8 py-3 font-semibold uppercase tracking-wide text-white hover:bg-white/10"
          >
            Our Services
          </Button>
        </div>
      </div>
    </section>
  )
}
