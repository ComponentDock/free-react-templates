import { Scale } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-surface bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/litigator-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-lg">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
            <span className="text-primary-400">We Fight</span> For Your Right
          </h1>
          <p className="mb-8 text-lg text-gray-300">
            Dedicated legal professionals committed to protecting your rights and interests with
            unwavering determination and expertise.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
          >
            <Scale className="h-5 w-5" aria-hidden="true" />
            Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
