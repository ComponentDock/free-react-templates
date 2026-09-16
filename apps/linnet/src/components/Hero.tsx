import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-navy-500">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/linnet-hero/1920/1080')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-800/80 to-navy-600/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            We Provide Creative Business Solutions
          </h1>
          <p className="mt-6 text-lg text-gray-300">
            We make sure to deliver the best business solution for our clients with cutting-edge
            strategies and professional expertise.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
          >
            Contact Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
