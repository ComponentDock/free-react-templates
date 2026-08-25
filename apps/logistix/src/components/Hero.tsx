import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gray-900">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 66%, rgba(0,0,0,0) 100%), url(https://picsum.photos/seed/logistix-hero/1920/900)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left: Hero text */}
          <div>
            <p className="font-display text-sm font-normal uppercase tracking-wide text-white">
              Welcome to Logistix
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-tight text-white sm:text-5xl lg:text-6xl">
              A TRULY GLOBAL
              <br />
              SERVICE PROVIDER
            </h1>
            <p className="mt-6 max-w-lg text-lg text-gray-300">
              We make your cargo transport simple
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 bg-brand px-8 py-5 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Explore Us
              <ArrowRight size={18} />
            </a>
          </div>

          {/* Right: Quick offer form */}
          <div className="rounded-lg bg-white p-8 shadow-xl">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-semibold text-gray-900">Get a quick offer</h2>
              <p className="mt-1 text-sm text-gray-500">We make your cargo transport simple</p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label
                  htmlFor="truckload"
                  className="mb-1 block text-xs font-medium uppercase text-gray-600"
                >
                  Truckload
                </label>
                <select
                  id="truckload"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option value="">Select</option>
                  <option value="full">Full Truckload</option>
                  <option value="partial">Partial Truckload</option>
                  <option value="ltl">Less Than Truckload</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="commodity"
                  className="mb-1 block text-xs font-medium uppercase text-gray-600"
                >
                  Commodity
                </label>
                <select
                  id="commodity"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                >
                  <option value="">Select</option>
                  <option value="electronics">Electronics</option>
                  <option value="food">Food & Beverage</option>
                  <option value="industrial">Industrial</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="distance"
                  className="mb-1 block text-xs font-medium uppercase text-gray-600"
                >
                  Distance (Miles)
                </label>
                <input
                  id="distance"
                  type="text"
                  placeholder="Write Distance"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>

              <div className="pt-2 text-center">
                <p className="text-sm text-gray-500">
                  Estimate Cost: <span className="font-semibold text-gray-900">$10,400.00</span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
