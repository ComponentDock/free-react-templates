import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/pyxis-video/1920/600)' }}
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <button
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
          aria-label="Play video"
        >
          <Play size={24} fill="white" />
        </button>
        <h2 className="mb-2 text-2xl font-bold uppercase text-white sm:text-3xl">
          Being Unique Is the Preference Now-a-Days
        </h2>
        <h3 className="text-lg font-medium text-white/80">Watch our story unfold</h3>
      </div>
    </section>
  )
}
