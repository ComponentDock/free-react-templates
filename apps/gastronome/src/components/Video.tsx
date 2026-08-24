export function Video() {
  return (
    <section id="video" className="relative py-0">
      <div
        className="relative flex h-[400px] items-center justify-center bg-cover bg-fixed bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/gastro-video/1920/600)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white">
          <p className="font-accent text-2xl">Discover</p>
          <h2 className="mt-2 text-4xl font-bold">Our Video</h2>
          <button
            className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white transition-colors hover:border-brand"
            aria-label="Play video"
          >
            <svg className="ml-1 h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
