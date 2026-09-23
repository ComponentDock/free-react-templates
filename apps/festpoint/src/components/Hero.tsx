import { Calendar, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gray-900">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/festpoint-hero/1920/1080')",
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-fest-400">
          Join the Experience
        </p>
        <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Developer <br />
          <span className="text-fest-400">Conference 2025</span>
        </h1>
        <p className="mb-6 flex items-center gap-2 text-lg text-gray-300">
          <Calendar className="h-5 w-5 text-fest-400" />
          December 21–24, 2025 &middot; Paris, Italy
        </p>

        {/* Countdown display */}
        <div className="mb-8 flex gap-4">
          {[
            { value: '12', label: 'Days' },
            { value: '08', label: 'Hours' },
            { value: '34', label: 'Minutes' },
            { value: '56', label: 'Seconds' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex h-16 w-16 flex-col items-center justify-center rounded bg-white/10 backdrop-blur-sm sm:h-20 sm:w-20"
            >
              <span className="text-xl font-bold text-white sm:text-2xl">{item.value}</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <a
          href="#register"
          className="inline-flex items-center gap-2 rounded bg-fest-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-fest-500"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
