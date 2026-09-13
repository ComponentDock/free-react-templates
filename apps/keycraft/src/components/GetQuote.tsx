export function GetQuote() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
  }

  return (
    <section id="about" aria-label="Get a quote" className="bg-navy py-12">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl font-bold uppercase text-white">Get a quote</h2>
          <p className="mt-4 text-gray-400">
            Fill in the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Your name"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Phone number"
          />
          <select
            name="service"
            required
            className="rounded bg-white/10 px-4 py-3 text-sm text-gray-400 outline-none focus:ring-2 focus:ring-primary-400"
            aria-label="Select a service"
          >
            <option value="">Select a service</option>
            <option value="access">Access</option>
            <option value="safes">Safes</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>
          <button
            type="submit"
            className="rounded bg-primary-400 px-8 py-3 text-sm font-bold uppercase text-navy transition-colors hover:bg-primary-500"
          >
            Get a quote
          </button>
        </form>
      </div>
    </section>
  )
}
