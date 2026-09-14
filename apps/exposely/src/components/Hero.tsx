export function Hero() {
  return (
    <section role="region" aria-label="Hero" className="relative flex min-h-screen items-end">
      <div
        data-testid="hero-bg"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://picsum.photos/seed/exposely-hero/1920/1080')",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20">
        <div data-testid="hero-divider" className="mb-6 h-px w-12 bg-white" />
        <h2 className="mb-4 text-5xl font-light text-white md:text-6xl">Golden Hour</h2>
        <p className="max-w-lg text-lg font-light leading-relaxed text-white/80">
          Capturing the warmth and magic of nature's most beautiful moments through the lens of
          passion and artistic vision.
        </p>
      </div>
    </section>
  )
}
