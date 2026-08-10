export function NewShoes() {
  return (
    <section id="new-arrivals" className="bg-white transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl items-stretch px-4 py-10 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div className="flex flex-col items-start justify-center bg-cloud px-6 py-16 lg:px-16 dark:bg-gray-900">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-brand">
            #New Summer Collection 2019
          </p>
          <h2 className="font-sans text-5xl font-black uppercase leading-tight text-ink lg:text-6xl dark:text-white">
            New Shoes
          </h2>
          <a
            href="#shop"
            className="mt-8 inline-flex items-center justify-center rounded-none bg-ink px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-gray-700 dark:bg-white dark:text-ink dark:hover:bg-gray-200"
          >
            Shop Now
          </a>
        </div>
        <div className="relative min-h-[320px] overflow-hidden lg:min-h-[560px]">
          <img
            src="https://picsum.photos/seed/bazaar-shoes-hero/900/1200"
            alt="New shoes collection"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
