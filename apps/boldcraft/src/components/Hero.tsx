export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[950px] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/boldcraft-hero/1920/950)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pt-32 md:flex-row md:items-start md:gap-16">
        <img
          src="https://picsum.photos/seed/boldcraft-portrait/327/327"
          alt="Marcus Cole portrait"
          className="h-[327px] w-[327px] rounded-lg object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="font-heading text-4xl leading-tight text-white md:text-5xl">
            My name is Marcus Cole.
            <br />
            Digital Product Designer
          </h1>
          <p className="mt-4 text-lg text-accent-green">Head of design at Creative Studio</p>
        </div>
      </div>
    </section>
  )
}
