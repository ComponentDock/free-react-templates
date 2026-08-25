import { UtensilsCrossed, ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 py-20 text-white lg:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 px-4 py-1.5 text-sm font-semibold text-amber-400 mb-6">
            <UtensilsCrossed className="h-4 w-4" />
            Finest Culinary Experience
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            Exquisite Food, <span className="text-amber-400">Crafted with Passion</span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-lg">
            Explore our handcrafted seasonal menu featuring artisanal wood-fired pizzas, farm-fresh
            breakfasts, gourmet dinners, and curated wines.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              className="rounded-full bg-amber-500 text-slate-900 hover:bg-amber-400 font-semibold px-8"
              onClick={() => {
                const el = document.getElementById('menu')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Menu <ArrowRight className="h-4 w-4 ml-2" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/tremolo-hero/560/500"
            alt="Gourmet dish presentation"
            className="w-full max-w-md rounded-2xl object-cover shadow-2xl border-4 border-amber-500/20"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
