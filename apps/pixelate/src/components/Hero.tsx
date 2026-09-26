export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-paper pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:px-8">
        <div className="order-2 flex justify-center lg:order-1">
          <img
            src="https://picsum.photos/seed/pixelate-hero/400/500"
            alt="Digital product designer portrait"
            className="rounded-2xl object-cover shadow-lg"
            width={400}
            height={500}
            loading="eager"
          />
        </div>
        <div className="order-1 text-center lg:order-2 lg:text-left">
          <h1 className="font-display text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">
            My name is Alex.
            <br />
            Digital Product Designer
          </h1>
          <p className="mt-4 text-lg text-mist">Head of design at Pixelate</p>
        </div>
      </div>
    </section>
  )
}
