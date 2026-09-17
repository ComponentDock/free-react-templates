export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bodyforge-hero/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-end px-4 py-32 sm:px-6">
        <div className="max-w-xl text-right">
          <h1 className="font-sans text-[80px] font-bold uppercase leading-none text-white sm:text-[120px] lg:text-[150px]">
            Feel Good
          </h1>
          <h2 className="font-sans text-[50px] font-bold uppercase leading-none text-white sm:text-[70px] lg:text-[90px]">
            Breath
          </h2>
          <a
            href="#contact"
            className="mt-8 inline-block rounded bg-brand px-8 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Become A Member
          </a>
        </div>
      </div>
    </section>
  )
}
