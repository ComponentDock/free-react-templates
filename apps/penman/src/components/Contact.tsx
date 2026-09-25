import { MapPin, Phone, Mail, Globe } from 'lucide-react'

const contactCards = [
  { icon: MapPin, title: 'Address', detail: '198 West 21th Street, Suite 721 New York NY 10016' },
  { icon: Phone, title: 'Contact Number', detail: '+ 1235 2355 98' },
  { icon: Mail, title: 'Email Address', detail: 'info@yoursite.com' },
  { icon: Globe, title: 'Website', detail: 'yoursite.com' },
]

export function Contact() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Contact Me</h2>
          <p className="text-smoke">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title} className="rounded-lg bg-mist p-6 text-center">
                <Icon className="mx-auto mb-3 text-primary-400" size={24} />
                <h3 className="mb-2 text-lg font-bold text-ink">{card.title}</h3>
                <p className="text-sm text-smoke">{card.detail}</p>
              </div>
            )
          })}
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <form
            className="space-y-4 rounded-lg bg-mist p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-3 text-sm focus:border-primary-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded bg-btn px-8 py-3 font-semibold text-white transition-colors hover:bg-btn-hover"
            >
              Send Message
            </button>
          </form>
          <div className="flex items-center justify-center rounded-lg bg-gray-200">
            <p className="text-sm text-smoke">Map Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  )
}
