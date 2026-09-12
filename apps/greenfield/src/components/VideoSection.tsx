import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center py-32"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/farmvideo/1920/600')`,
      }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 text-center">
        <button
          type="button"
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-white hover:text-ink"
          aria-label="Play video"
        >
          <Play size={32} />
        </button>
        <h2 className="text-3xl font-bold text-white">Watch Modern Agricultural Farming</h2>
      </div>
    </section>
  )
}
