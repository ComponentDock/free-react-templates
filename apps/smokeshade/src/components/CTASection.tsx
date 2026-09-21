export function CTASection() {
  return (
    <section
      className="relative flex min-h-[400px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/smokeshade-cta/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
          We Create Trends For The World
        </h2>
        <p className="mb-8 text-[#b3b3b3]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <a
          href="#"
          className="inline-block rounded-full bg-[#e32879] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c41f65]"
        >
          Work With Us
        </a>
      </div>
    </section>
  )
}
