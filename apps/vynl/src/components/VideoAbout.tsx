function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-white">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function VideoAbout() {
  return (
    <section className="bg-brand-dark py-16 lg:py-20" data-testid="video-about">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Video thumbnail */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/vynl-video/800/500"
              alt="Video thumbnail"
              className="w-full object-cover"
              loading="lazy"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/50"
              aria-label="Play video"
            >
              <PlayIcon />
            </button>
          </div>

          {/* Text content */}
          <div>
            <h2 className="mb-4 text-3xl font-bold text-white font-heading">We Love Music</h2>
            <p className="mb-4 text-lg text-brand-gold">Join with us today</p>
            <p className="mb-4 leading-relaxed text-white/50">
              From underground clubs to grand festival stages, we bring you the best DJ performances
              and music events. Our curated shows feature cutting-edge talent and legendary artists
              who know how to move a crowd.
            </p>
            <p className="mb-6 leading-relaxed text-white/50">
              Whether you are a seasoned club-goer or just discovering electronic music, our events
              are designed to create unforgettable experiences. Every beat tells a story, and every
              night is a new chapter.
            </p>
            <a
              href="#contact"
              className="inline-block bg-brand-gold px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-yellow-500"
            >
              Join Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
