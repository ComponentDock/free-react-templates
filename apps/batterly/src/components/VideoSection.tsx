import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative flex items-center justify-center bg-gray-900 py-24 sm:py-32">
      <img
        src="https://picsum.photos/seed/batterly-video/1400/600"
        alt=""
        aria-hidden="true"
        width={1400}
        height={600}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <button
        type="button"
        aria-label="Play video"
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-brand/90 text-white shadow-lg transition-transform hover:scale-110"
      >
        <Play className="ml-1 h-8 w-8" />
      </button>
    </section>
  )
}
