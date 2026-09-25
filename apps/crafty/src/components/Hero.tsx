export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center bg-gray-900"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900/30" />
      <div className="relative z-10 text-center">
        <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
          Crafting <br /> Best Experience
        </h1>
        <p className="mt-4 text-lg text-gray-300">Art and Crafting / Acting and Philosophy</p>
      </div>
    </section>
  )
}
