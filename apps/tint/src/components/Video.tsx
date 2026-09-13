import { Play } from 'lucide-react'

export function Video() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-navy-800 bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tint-video/1920/800)',
      }}
      aria-label="Video showcase"
    >
      <div className="absolute inset-0 bg-navy-800/70" />
      <div className="relative z-10 text-center">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white text-white transition-colors hover:bg-gold-400 hover:border-gold-400 hover:text-navy-800"
          aria-label="Play video"
        >
          <Play size={24} />
        </a>
        <h2 className="text-2xl font-bold text-white font-[family-name:var(--font-condensed)] md:text-3xl">
          Here&apos;s the Preview of
          <br />
          Interior Design Conference of 2024
        </h2>
      </div>
    </section>
  )
}
