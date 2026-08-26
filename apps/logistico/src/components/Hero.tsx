import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] bg-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/80 to-dark/60" />
      <img
        src="https://picsum.photos/seed/logistico-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="relative z-10 mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:flex-row lg:text-left">
        <div className="lg:w-1/2">
          <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
            A Truly Global
            <br />
            Service Provider
          </h1>
          <p className="mb-8 max-w-lg text-lg text-white/70">
            We make your cargo transport simple. Reliable logistics solutions for businesses
            worldwide.
          </p>
          <a
            href="#about"
            className="inline-flex items-center gap-2 bg-brand px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
          >
            Explore Us
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 w-full max-w-md rounded bg-white/10 p-6 backdrop-blur-sm lg:ml-auto lg:mt-0 lg:w-96">
          <h2 className="mb-4 text-center text-xl font-bold text-white">Get a Quick Offer</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
            aria-label="Quick offer calculator"
          >
            <select
              aria-label="Truckload type"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
            >
              <option value="" className="text-dark">
                Select Truckload
              </option>
              <option value="full" className="text-dark">
                Full Truckload
              </option>
              <option value="partial" className="text-dark">
                Partial Truckload
              </option>
            </select>
            <select
              aria-label="Commodity type"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
            >
              <option value="" className="text-dark">
                Select Commodity
              </option>
              <option value="general" className="text-dark">
                General Freight
              </option>
              <option value="perishable" className="text-dark">
                Perishable Goods
              </option>
            </select>
            <input
              type="text"
              placeholder="Distance (miles)"
              aria-label="Distance"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder-white/50 focus:border-brand focus:outline-none"
            />
            <div className="text-center text-sm text-white/60">
              Estimated Cost: <span className="font-bold text-brand">$10,400.00</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
