import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function VideoSection() {
  return (
    <section id="video" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-bold text-heading sm:text-4xl">
            Watch our baking process
          </h2>
          <p className="mb-6 text-body">
            From selecting the finest ingredients to pulling fresh loaves from our ovens, every step
            is crafted with care. See the passion that goes into every piece we bake.
          </p>
          <p className="mb-8 text-body">
            Our bakers start before dawn, mixing and kneading with precision and love. The result is
            always the same: perfectly baked goods that bring joy to your table.
          </p>
          <Button
            variant="primary"
            size="lg"
            className="rounded-full bg-heading px-8 py-3 text-white hover:bg-heading/80"
          >
            Get Started Now
          </Button>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/loaf-video/600/400"
            alt="Baking video preview"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-navy/50" />
          <button
            type="button"
            aria-label="Play video"
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
