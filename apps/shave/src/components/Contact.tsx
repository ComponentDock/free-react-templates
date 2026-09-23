import { MapPin, Phone, Mail, Headphones } from 'lucide-react'

const contactCards = [
  {
    title: 'Visit Our Office',
    lines: ['56/8, West Panthapath', 'Dhanmondi, Dhaka - 1205'],
    icon: MapPin,
  },
  {
    title: "Let's Call Us",
    lines: ['Phone: 012-6532-568-9746', 'FAX: 02-6532-568-746'],
    icon: Phone,
  },
  {
    title: "Let's Email Us",
    lines: ['hello@shave.studio', 'support@shave.studio'],
    icon: Mail,
  },
  {
    title: 'Customer Support',
    lines: ['support@shave.studio', 'emergency@shave.studio'],
    icon: Headphones,
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-section-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">If you need, Just drop us a line</h2>
          <p className="mt-2 text-gray-500">We would love to hear from you.</p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <div key={card.title}>
                <Icon className="h-6 w-6 text-gray-900" aria-hidden="true" strokeWidth={1.5} />
                <h3 className="mt-3 font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {card.lines.join(' | ')}
                </p>
              </div>
            )
          })}
        </div>
        <form className="mt-12 grid gap-6 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <input
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
            />
            <input
              name="email"
              type="email"
              placeholder="Enter email address"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
            />
            <input
              name="subject"
              placeholder="Enter your subject"
              required
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
            />
          </div>
          <div className="space-y-4">
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition-colors focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20"
            />
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-8 py-3 text-sm font-medium text-white transition-colors hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
