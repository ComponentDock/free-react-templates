export function VideoHero() {
  return (
    <section className="relative flex min-h-[800px] items-center justify-center bg-cover bg-center bg-no-repeat">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/roxyglow-video/1920/1080"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-4xl font-bold text-white md:text-5xl">
          We&apos;re Most Recommended Hotel
        </h2>
      </div>
    </section>
  )
}
