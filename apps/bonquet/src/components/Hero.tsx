import { Button } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[90vh] items-center bg-brand-50 pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 md:grid-cols-2">
        {/* Text */}
        <div className="order-2 md:order-1">
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-warm-900 md:text-5xl lg:text-6xl">
            Meet, Eat & Enjoy the true test
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-warm-900/60">
            Making a reservation at Bonquet restaurant is easy and takes just a couple of minutes.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button className="rounded-full bg-brand-400 px-8 py-3 font-display text-base font-medium text-white shadow-lg shadow-brand-400/20 hover:bg-brand-500">
              Our Menu
            </Button>
            <button className="flex items-center gap-2 text-sm font-medium text-warm-900 transition-colors hover:text-brand-400">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-brand-400 text-brand-400">
                <Play size={16} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>
        </div>

        {/* Hero image */}
        <div className="order-1 flex justify-center md:order-2">
          <img
            src="https://picsum.photos/seed/bonquet-hero/600/700"
            alt="Delicious restaurant dish"
            className="h-[400px] w-full rounded-3xl object-cover md:h-[550px]"
          />
        </div>
      </div>
    </section>
  )
}
