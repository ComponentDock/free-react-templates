import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section
      id="video"
      className="relative flex min-h-[50vh] items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/venuepoint-video/1920/1080)',
      }}
    >
      <div className="px-4 text-center">
        <h2 className="font-display text-4xl text-white md:text-5xl">Food for the soul</h2>
        <a
          href="https://player.vimeo.com/video/99340873?autoplay=1&loop=1&title=0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play video"
          className="mt-6 inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/80 text-white transition-colors hover:border-primary-400 hover:text-primary-400"
        >
          <Play className="h-6 w-6 ml-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
