import { Send } from 'lucide-react'

export function BookingForm() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/passage-booking/1920/600)',
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="text-white">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
              Book Now
            </span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
              Schedule Your Immigration Consultation
            </h2>
            <p className="mb-8 text-white/70">
              Fill out the form and our team will get back to you within 24 hours. Take the first
              step towards your new life abroad.
            </p>
          </div>
          <form
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Booking form"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Full Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Email Address"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="destination"
                placeholder="Destination Country"
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Destination Country"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
                aria-label="Phone Number"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full resize-none rounded bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand"
              aria-label="Message"
            />
            <button
              type="submit"
              className="flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              <Send className="h-4 w-4" />
              Submit Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
