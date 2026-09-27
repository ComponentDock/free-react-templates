import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center text-center"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/servhub-hero/1600/900')`,
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24">
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">We Are Digital Services</h1>
        <p className="mb-8 text-lg text-white/90">
          Delivering world-class digital solutions to help your business grow. From strategy to
          execution, we've got you covered.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded bg-lime-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
        >
          Our Services <ArrowDown size={16} />
        </a>
      </div>
    </section>
  )
}
