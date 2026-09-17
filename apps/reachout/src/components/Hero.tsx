export function Hero() {
  return (
    <section className="relative bg-bg-sidebar py-16 text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
      <div className="relative z-10">
        <h1 className="mb-3 font-['Playfair_Display',serif] text-3xl font-bold md:text-4xl">
          Get In Touch
        </h1>
        <p className="text-sm text-white/80 md:text-base">
          We&apos;d love to hear from you. Send us a message!
        </p>
      </div>
    </section>
  )
}
