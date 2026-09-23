export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center px-[10%]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(https://picsum.photos/seed/beacon-hero/1600/900)',
      }}
    >
      <div className="text-white">
        <h1 className="mb-4 text-5xl font-bold uppercase tracking-wider md:text-7xl">Beacon</h1>
        <p className="text-lg font-light md:text-xl">
          We Create Awesome
          <br />
          Photographies and more
        </p>
      </div>
    </section>
  )
}
