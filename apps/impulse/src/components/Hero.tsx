export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/impulse-hero/1920/1080')`,
        minHeight: '100vh',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mx-auto max-w-5xl font-display text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
          We are Impulse, we create great stuff.
        </h1>
      </div>
    </section>
  )
}
