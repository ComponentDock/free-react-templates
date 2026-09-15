export function Hero() {
  return (
    <section className="relative flex min-h-[600px] items-center justify-center bg-gray-900 pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/valet-hero/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Save Your Precious Time &amp; Outsource Daily Tasks
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Focus on what matters most. We handle the rest with professional virtual assistant
          services tailored to your needs.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Request Our Assistant
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
