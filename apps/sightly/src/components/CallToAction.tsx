export function CallToAction() {
  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/expo-cta/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-primary/80" />
      <div className="relative mx-auto max-w-7xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold text-white font-heading md:text-4xl">
          Let&apos;s talk about your project
        </h2>
        <p className="mb-8 text-lg text-white/90">
          Take the first step towards growing your brand online. Our team is ready to help you
          succeed.
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-gray-100"
        >
          Start Talking
        </a>
      </div>
    </section>
  )
}
