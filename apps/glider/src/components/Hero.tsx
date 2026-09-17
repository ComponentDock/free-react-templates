import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center bg-transparent pt-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left: headline */}
          <div>
            <h1 className="mb-6 text-4xl font-semibold uppercase leading-tight text-white md:text-5xl">
              Don't Look Anywhere,
              <br />
              This Is the Best Place on Web
            </h1>
            <p className="mb-8 max-w-md text-base font-light text-white/80">
              We craft creative digital experiences that inspire and engage. Your vision, our
              expertise — let's build something remarkable together.
            </p>
            <a
              href="#contact"
              className={cn(
                'inline-flex items-center gap-2 rounded-full border border-white px-8 py-3',
                'text-sm font-medium text-white transition-all duration-300',
                'hover:bg-white hover:text-[#3e69fe]',
              )}
            >
              Get Started
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right: decorative illustration */}
          <div className="hidden justify-center md:flex">
            <div className="relative h-80 w-80">
              <div className="absolute inset-0 rounded-full bg-white/10" />
              <div className="absolute inset-4 rounded-full bg-white/5" />
              <img
                src="https://picsum.photos/seed/glider-hero/400/400"
                alt="Creative agency illustration"
                className="relative h-full w-full rounded-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
