export function Hero() {
  return (
    <section
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/seared-hero/1920/1080)',
      }}
    >
      <div className="px-4 text-center">
        <h1
          className="mx-auto max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sit consequuntur eveniet
          voluptas minus officia.
        </h1>
      </div>
    </section>
  )
}
