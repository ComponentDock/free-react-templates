export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center bg-gray-100">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-4 sm:flex-row sm:px-6">
        <div className="flex-1 text-center sm:text-left">
          <span className="inline-block rounded bg-brand px-4 py-1 text-sm font-bold text-white">
            Flat 75% Off
          </span>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight text-heading sm:text-5xl">
            It&apos;s Happening
            <br />
            this Season!
          </h1>
          <a
            href="#shop"
            className="mt-6 inline-block bg-brand px-8 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
          >
            Purchase Now
          </a>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/shopcraft-hero/600/600"
            alt="Shop featured product"
            className="mx-auto w-full max-w-md object-cover"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
