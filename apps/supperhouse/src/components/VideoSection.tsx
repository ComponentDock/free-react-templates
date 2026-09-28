import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat py-32"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/supperhouse-video/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative z-10 text-center">
        <button
          type="button"
          aria-label="Play video"
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 text-white transition-all hover:scale-110 hover:border-brand hover:text-brand"
        >
          <Play className="ml-1 h-8 w-8" aria-hidden="true" />
        </button>

        <h2 className="mb-4 max-w-3xl mx-auto text-2xl font-semibold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
          We Always Serve the Vaping Hot and Delicious Foods
        </h2>
        <p className="mx-auto max-w-xl text-sm font-light text-white/60">
          Watch how our chefs transform the freshest ingredients into culinary masterpieces,
          prepared and served piping hot to your table.
        </p>
      </div>
    </section>
  )
}
