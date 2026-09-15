export function ParallaxQuote() {
  return (
    <section
      className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-fixed bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/namastay-parallax/1920/800)' }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 px-4 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Do Yoga Today For Better Tomorrow
        </h2>
      </div>
    </section>
  )
}
