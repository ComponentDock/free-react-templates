import { Play } from 'lucide-react'

export function Highlights() {
  return (
    <section aria-label="Video highlights" className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative flex h-80 items-center justify-center overflow-hidden rounded-md bg-cover bg-center shadow-[0_-18px_93px_-56px_rgba(0,0,0,0.59)] md:h-[400px]"
          style={{ backgroundImage: "url('https://picsum.photos/seed/slugger-video/1200/500')" }}
        >
          <button
            type="button"
            aria-label="Play highlights video"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-dark"
          >
            <Play className="h-8 w-8 fill-current" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
