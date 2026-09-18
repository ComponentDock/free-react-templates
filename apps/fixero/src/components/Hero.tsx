export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://picsum.photos/seed/fixero-hero/1600/900)',
      }}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Perfection is always in our mind.
          </h1>
          <div className="mt-4 h-1 w-16 bg-brand" />
        </div>
      </div>
    </section>
  )
}
