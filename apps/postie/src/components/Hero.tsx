import { ChevronDown, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero"
      className="overflow-hidden bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:py-32">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            An Amazing App <span className="block">That Does It All.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            Etiam nec odio vestibulum est mattis efficitur ut magna. Pellentesque ultricies tellus a
            felis tincidunt, ac interdum arcu rutrum.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-primary-600 shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Get The App
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-semibold text-white transition-colors hover:text-primary-100"
            >
              Scroll Down
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hidden justify-end lg:flex">
          <img
            src="https://picsum.photos/seed/postie-hero/560/640"
            alt="Postie mail app on a phone screen"
            className="h-auto w-full max-w-md rounded-3xl shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
