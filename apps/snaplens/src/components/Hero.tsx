export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)), url(https://picsum.photos/seed/snaplens-hero/1920/1080)',
      }}
    >
      <div className="px-6 text-center">
        <h1 className="mb-4 text-6xl font-bold tracking-wider text-white md:text-8xl">Snaplens</h1>
        <p className="text-lg font-light tracking-wide text-white/80 md:text-2xl">
          We Create Awesome
          <br />
          Photographies and More
        </p>
      </div>
    </section>
  )
}
