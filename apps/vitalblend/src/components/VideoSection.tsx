import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      id="video"
      className="flex min-h-[400px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/vitalblend-video/1920/600)' }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <a
          href="#"
          className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-full bg-brand text-white animate-pulse-border transition-colors hover:bg-brand-dark"
          aria-label="Play video"
        >
          <Play size={28} fill="currentColor" />
        </a>
      </div>
    </section>
  )
}
