export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-brand"
      style={{
        background: 'radial-gradient(circle at 50% 50%, #7539dd 0%, #7034db 100%)',
      }}
    >
      <div className="relative z-10 text-center">
        <h1 className="mb-6 text-5xl font-bold uppercase tracking-wide text-white md:text-7xl">
          We&apos;re
          <br />
          Creative
        </h1>
        <a
          href="#services"
          className="inline-flex items-center rounded-full border border-white px-8 py-3 text-sm font-medium text-white transition hover:border-transparent hover:text-ink"
          style={{
            backgroundImage: 'linear-gradient(0deg, #f58e9a 0%, #fbe44c 100%)',
            backgroundClip: 'padding-box',
          }}
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
