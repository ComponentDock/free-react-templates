import { type FormEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function DiscountCTA() {
  return (
    <section
      id="contact"
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/renovo-discount/1600/800')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#f43d6a] to-[#f574dd] opacity-90" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enjoy 25% Seasonal Discount!
            </h2>
            <p className="text-white/90 mb-6 max-w-md">
              Take advantage of our limited-time offer on all repair services. Expert technicians,
              quality parts, and fast turnaround.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-[#222] px-8 py-3 rounded-full font-semibold uppercase text-sm hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-all"
            >
              Order Service Now
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h4 className="text-white text-center text-lg font-semibold mb-4">
              Get a free Estimate
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2.5 bg-transparent border border-pink-300/60 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white rounded"
                required
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full px-4 py-2.5 bg-transparent border border-pink-300/60 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 bg-transparent border border-pink-300/60 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white rounded"
                  required
                />
              </div>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-2.5 bg-transparent border border-pink-300/60 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white rounded resize-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#988fff] text-white px-8 py-2.5 rounded-full text-sm font-medium uppercase hover:bg-white hover:text-[#988fff] transition-colors"
                >
                  Get Estimate
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
