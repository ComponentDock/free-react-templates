import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-ink text-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/namastay-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 px-4 text-center">
        <h1 className="font-display text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Lose Yourself In Ambience &amp; Atmosphere
        </h1>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/60 text-white transition hover:border-white hover:bg-white/10"
            aria-label="Play video"
          >
            <Play size={24} fill="currentColor" />
          </a>
          <span className="text-sm text-white/70">Watch Video</span>
        </div>
      </div>
    </section>
  )
}
