export function Banner() {
  return (
    <section
      id="home"
      className="flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat pt-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/feastly-hero/1600/900)',
      }}
    >
      <div className="text-center">
        <h6 className="mb-4 text-sm font-light uppercase tracking-widest text-white">
          The most interesting food in the world
        </h6>
        <h1 className="font-display text-5xl font-bold italic leading-tight text-white md:text-7xl">
          Discover the <span className="text-primary-400 not-italic">flavors</span>
          <br />
          of <span className="text-primary-400 not-italic">feastly</span>
        </h1>
      </div>
    </section>
  )
}
