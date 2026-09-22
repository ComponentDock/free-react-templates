import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center lg:min-h-[920px]"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitalblend-hero/1920/920)' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          {/* Video play icon */}
          <div className="mb-6">
            <a
              href="#video"
              className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand text-white animate-pulse-border transition-colors hover:bg-brand-dark"
              aria-label="Play video"
            >
              <Play size={24} fill="currentColor" />
            </a>
          </div>

          <h1 className="mb-4 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
            Health is wealth keep it healthy
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            Almost before we knew it, we had left the ground
          </p>
          <a
            href="#services"
            className="inline-block rounded-bl-xl bg-brand-dark px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand"
          >
            Take a Service
          </a>
        </div>
      </div>
    </section>
  )
}
