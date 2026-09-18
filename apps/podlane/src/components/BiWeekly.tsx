const PLATFORMS = [
  { name: 'Amazon', href: '#' },
  { name: 'iTunes', href: '#' },
  { name: 'Spotify', href: '#' },
]

export function BiWeekly() {
  return (
    <section className="relative py-24">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/podlane-biweekly/1920/800)' }}
      />
      <div className="absolute inset-0 bg-overlay" />

      <div className="relative z-10 mx-auto max-w-[1140px] px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left content */}
          <div>
            <h2 className="mb-6 text-3xl font-bold text-heading md:text-4xl">Bi-weekly episodes</h2>
            <p className="mb-8 max-w-md text-sm leading-relaxed text-body">
              Cras congue et risus eget congue. Integer id justo non orci suscipit cursus a
              scelerisque libero. Fusce in tortor mauris. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus.
            </p>
            <div className="flex flex-wrap gap-3">
              {PLATFORMS.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  className="rounded-full border border-white px-6 py-2 text-xs font-medium text-heading transition-colors hover:bg-white hover:text-brand"
                >
                  {p.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/podlane-show3r/600/450"
              alt="Podcast show"
              className="w-full rounded-lg"
              loading="lazy"
            />
            {/* Logo watermark */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-heading/60">
              <span className="text-xs font-light">my</span>
              <span className="text-sm font-bold">podcast</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-3 w-3 fill-brand">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
