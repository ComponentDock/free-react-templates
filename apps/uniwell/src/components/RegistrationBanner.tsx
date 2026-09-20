export function RegistrationBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/uniwell-cta/1920/500)',
      }}
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 bg-primary-700/85" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2
          id="cta-heading"
          className="mb-4 text-3xl font-bold text-white font-display md:text-4xl"
        >
          Register for Free Today
        </h2>
        <p className="mb-8 text-lg text-white/80">
          Start your learning journey with Uniwell. Access hundreds of courses, expert instructors,
          and a supportive community — all for free.
        </p>
        <a
          href="#register"
          className="inline-block rounded bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-primary-700 shadow transition-colors hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
