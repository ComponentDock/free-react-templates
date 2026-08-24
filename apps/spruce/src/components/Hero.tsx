import { FormEvent } from 'react'

export function Hero() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="home" className="relative bg-gradient-to-br from-white to-mist overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <span className="inline-block text-brand text-sm font-body uppercase tracking-widest mb-4">
            A complete business solution
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
            Build your website
            <br />
            in record time.
          </h1>
          <p className="text-body font-body text-lg mb-8 max-w-lg">
            Combine sections from Spruce's vast component library and create beautiful.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-border rounded-l px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="bg-brand text-white font-semibold px-6 py-3 rounded-r text-sm hover:bg-brand-light transition-colors"
            >
              Get Free Quote
            </button>
          </form>
        </div>

        {/* Hero image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/spruce-hero/600/500"
            alt="Business hero illustration"
            className="rounded-lg shadow-xl w-full"
          />
        </div>
      </div>
    </section>
  )
}
