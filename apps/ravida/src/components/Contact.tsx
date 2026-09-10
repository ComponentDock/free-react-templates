import { MapPin, Clock, Phone } from 'lucide-react'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/ravida-contact/1920/600)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold text-white">Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Address & Hours */}
          <div className="text-white">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-brand" />
                <h5 className="text-sm font-semibold uppercase tracking-wider">Address</h5>
              </div>
              <p className="text-white/80">240, Kings Street, New York City USA</p>
            </div>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Clock size={18} className="text-brand" />
                <h5 className="text-sm font-semibold uppercase tracking-wider">We Are Open</h5>
              </div>
              <p className="text-white/80">Mon - Fri (9.00-19.00)</p>
              <p className="text-white/80">Sat - Sun (9.00-19.00)</p>
            </div>
          </div>

          {/* Reservation */}
          <div className="text-white">
            <div className="mb-6">
              <div className="mb-2 flex items-center gap-2">
                <Phone size={18} className="text-brand" />
                <h5 className="text-sm font-semibold uppercase tracking-wider">Reservation</h5>
              </div>
              <p className="text-white/80">+880 367 251 167</p>
              <p className="text-white/80">ravida@contact.com</p>
            </div>
          </div>

          {/* Quick Links + Newsletter */}
          <div className="text-white">
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="mb-8 space-y-2">
              {['Reservation', 'Breakfast', 'Lunch', 'Dinner'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 transition-colors hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="mb-4 text-lg font-bold">Subscribe Newsletter</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Email Address"
                aria-label="Email address for newsletter"
                className="flex-1 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/50 outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
