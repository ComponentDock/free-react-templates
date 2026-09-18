export function PromoCover() {
  return (
    <section
      className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/placeboard-promo/1920/500)',
        backgroundAttachment: 'fixed',
        minHeight: '500px',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 text-center">
        <h2
          className="mb-4 text-4xl font-bold text-white md:text-5xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Get 10% off On Your Next Travel
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Sign up for our newsletter and receive exclusive travel deals
        </p>
        <a
          href="#"
          className="inline-block bg-heading px-10 py-4 text-sm font-semibold uppercase text-white transition-colors hover:bg-black/80"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
