export function Hero() {
  return (
    <section
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/1600/600?random=1)' }}
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          Get your <span className="text-brand">Education</span> today!
        </h1>
      </div>
    </section>
  )
}
