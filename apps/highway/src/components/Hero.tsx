import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] bg-cover bg-center pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/highway-hero/1600/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Left: headline + play button */}
          <div className="lg:col-span-6">
            <h1 className="mb-6 text-4xl font-extralight leading-tight text-white sm:text-5xl lg:text-6xl">
              Now It&apos;s easy for you <span className="font-semibold">rent a car</span>
            </h1>
            <p className="mb-8 max-w-md text-sm text-white/70">
              A powerful and elegant car rental solution for your next adventure. Choose from a wide
              range of vehicles and enjoy the ride.
            </p>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label="Play video"
                className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
              >
                <Play className="h-6 w-6 fill-current" />
              </button>
              <span className="text-sm text-white/70">Easy steps for renting a car</span>
            </div>
          </div>

          {/* Right: booking form */}
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-[5px] bg-white p-6 shadow-[0px_10px_31px_-21px_rgba(0,0,0,0.33)]">
              <h2 className="mb-4 text-lg font-bold text-heading">Make your trip</h2>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="pickup-location"
                    className="mb-1 block text-xs font-semibold uppercase text-heading"
                  >
                    Pick-up Location
                  </label>
                  <input
                    id="pickup-location"
                    type="text"
                    placeholder="City or airport"
                    className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading placeholder:text-black/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="dropoff-location"
                    className="mb-1 block text-xs font-semibold uppercase text-heading"
                  >
                    Drop-off Location
                  </label>
                  <input
                    id="dropoff-location"
                    type="text"
                    placeholder="City or airport"
                    className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading placeholder:text-black/40"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      htmlFor="pickup-date"
                      className="mb-1 block text-xs font-semibold uppercase text-heading"
                    >
                      Pick-up Date
                    </label>
                    <input
                      id="pickup-date"
                      type="date"
                      className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="dropoff-date"
                      className="mb-1 block text-xs font-semibold uppercase text-heading"
                    >
                      Drop-off Date
                    </label>
                    <input
                      id="dropoff-date"
                      type="date"
                      className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="pickup-time"
                    className="mb-1 block text-xs font-semibold uppercase text-heading"
                  >
                    Pick-up Time
                  </label>
                  <input
                    id="pickup-time"
                    type="time"
                    className="h-10 w-full border border-black/5 bg-transparent px-3 text-sm text-heading"
                  />
                </div>
                <button
                  type="submit"
                  className="h-10 w-full bg-primary text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                >
                  Search Vehicle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
