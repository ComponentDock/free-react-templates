import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/curenova-hero/1600/600')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
          Your Health is always in the first place
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200">
          We provide comprehensive healthcare solutions with compassion and dedication. Trust our
          experienced medical professionals for your well-being.
        </p>
        <Button size="lg" className="rounded-full bg-blue-400 px-8 text-white hover:bg-blue-500">
          Make an Appointment
        </Button>
      </div>
    </section>
  )
}
