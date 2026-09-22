export function VideoHero() {
  return (
    <section className="relative h-[800px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/roxyglow-video/1920/1080)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <h2 className="font-display text-4xl font-bold md:text-6xl">
          We&apos;re Most Recommended Hotel
        </h2>
      </div>
    </section>
  )
}
