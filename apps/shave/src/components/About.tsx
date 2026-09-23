import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold leading-snug text-gray-900">
            We Believe that
            <br />
            Interior beautifies the
            <br />
            Total Architecture
          </h2>
          <p className="mt-6 leading-relaxed text-gray-500">
            A great barbershop is more than just a chair and a mirror. It is a place where
            craftsmanship meets comfort, where every detail is designed to make you feel your
            absolute best.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-6 rounded-full border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white"
          >
            See Details <Play className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/shave-about/600/400"
            alt="Inside the Shave barbershop"
            className="w-full rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-400 text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
