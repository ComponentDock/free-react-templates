import { Button } from '@free-react-templates/ui'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative bg-surface-dark text-white overflow-hidden"
      aria-label="Hero banner"
    >
      <div className="relative h-[500px] md:h-[600px] flex items-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/threadline-hero/1600/600)' }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 z-10">
          <div className="max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-widest mb-2 text-brand-400">
              Summer Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Fall - Winter Collections 2030
            </h1>
            <p className="text-gray-300 mb-6 text-lg">
              A specialist label creating luxury essentials. Ethically crafted with an unwavering
              commitment to exceptional quality.
            </p>
            <Button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded text-sm font-semibold uppercase tracking-wide inline-flex items-center gap-2 transition-colors">
              Shop now <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
