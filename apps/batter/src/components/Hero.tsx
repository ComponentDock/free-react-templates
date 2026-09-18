import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[600px] items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Instead of eating,
          <br />
          you should feel the garnishing
        </h1>
        <p className="mb-8 max-w-xl text-lg text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
