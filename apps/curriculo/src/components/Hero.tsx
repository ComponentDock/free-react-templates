export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Gradient overlay matching original #8490ff → #62bdfc */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-start to-brand-end" />

      {/* Background image placeholder */}
      <img
        src="https://picsum.photos/seed/curriculo-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-30"
        loading="eager"
      />

      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="text-4xl font-extralight tracking-wide md:text-6xl">Hello, I&apos;m</h1>
        <p className="mt-2 text-3xl font-bold uppercase tracking-widest md:text-5xl">Alex Morgan</p>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-white/90">
          and this is My Curriculo
        </p>
      </div>
    </section>
  )
}
