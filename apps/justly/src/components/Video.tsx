import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="relative py-32 bg-surface" data-testid="video">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/justly-video/1920/600)' }}
      />
      <div className="relative z-10 flex items-center justify-center">
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 rounded-full bg-brand flex items-center justify-center hover:bg-brand-dark transition-colors"
          aria-label="Play video"
        >
          <Play className="w-8 h-8 text-white ml-1" fill="white" />
        </a>
      </div>
    </section>
  )
}
