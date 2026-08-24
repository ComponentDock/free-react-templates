import { Play } from 'lucide-react'

export function VideoIntro() {
  return (
    <section className="bg-paper py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
              The shelter is the Outcome of the Dream
            </h2>
          </div>
          <div>
            <p className="mb-4 text-mist">
              A boutique resort nestled along a private, quiet tropical beach. Stay away from the
              crowd and enjoy the beauty and tranquility of an oceanfront escape.
            </p>
            <p className="text-mist">
              Havenshore extends along a pristine coastline, offering world-class amenities and
              breathtaking views for an unforgettable stay.
            </p>
          </div>
        </div>

        {/* Video area */}
        <div
          className="relative flex min-h-[400px] items-center justify-center rounded-2xl bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://picsum.photos/seed/havenshore-video/1200/500')" }}
        >
          <div className="absolute inset-0 rounded-2xl bg-black/40" />
          <a
            href="https://www.youtube.com/watch?v=up68UAfH0d0"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg transition hover:scale-110 hover:bg-white"
            aria-label="Play video"
          >
            <Play size={32} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
