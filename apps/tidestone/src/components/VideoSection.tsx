import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      className="flex min-h-[300px] items-center justify-center bg-cover bg-center bg-no-repeat py-20 text-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/tidestone-video/1600/600)',
      }}
    >
      <div className="px-4">
        <button
          type="button"
          aria-label="Play video"
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 bg-white/15 transition-colors hover:bg-brand/80 mx-auto"
        >
          <Play className="h-6 w-6 fill-white" aria-hidden="true" />
        </button>
        <h3 className="mb-3 font-display text-3xl font-bold">Tidestone</h3>
        <p className="text-sm text-white/80">
          View four has said does men saw find dear shy talent
        </p>
      </div>
    </section>
  )
}
