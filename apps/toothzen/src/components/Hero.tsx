import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    heading: 'Achieve Desired Perfect Smile',
    sub: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    heading: 'Dentist Services that You Can Trust',
    sub: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-tooth-dark-blue"
    >
      {/* Gradient overlay: peach → tan → teal */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/35 via-amber-200/35 to-tooth-teal/80" />

      {/* Background image (placeholder) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/toothzen-hero/1920/800)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            {slides[0]!.heading}
          </h1>
          <p className="mt-4 text-lg text-white/80">{slides[0]!.sub}</p>
          <div className="mt-8 flex gap-4">
            <a
              href="#appointment"
              className="rounded bg-tooth-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-tooth-dark-blue"
            >
              Make an Appointment
            </a>
            <a
              href="#services"
              className="rounded border-2 border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-tooth-dark-blue"
            >
              Our Services
            </a>
          </div>
        </div>

        {/* Slide arrows (decorative) */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/40"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
