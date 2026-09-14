import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
            See Mechbot in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Watch how Mechbot transforms classrooms and workshops with hands-on robotic learning.
          </p>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
          <img
            src="https://picsum.photos/seed/mechbot-video/800/450"
            alt="Mechbot demonstration video thumbnail"
            className="h-auto w-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-heading/30">
            <button
              type="button"
              aria-label="Play video"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-xl transition-all hover:scale-110 hover:bg-brand/90"
            >
              <Play className="h-8 w-8 ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
