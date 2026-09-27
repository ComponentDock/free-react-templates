import { Send } from 'lucide-react'

const offices = [
  {
    city: 'London',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+1 232 3235 324',
    email: 'youremail@domain.com',
  },
  {
    city: 'New York',
    address: '203 Fake St. Mountain View, San Francisco, California, USA',
    phone: '+1 232 3235 324',
    email: 'youremail@domain.com',
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-black">Contact Form</h2>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
            aria-label="Contact form"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First name"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-lime-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Full name"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-lime-400 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-lime-400 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject of the message"
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-lime-400 focus:outline-none"
            />
            <textarea
              rows={6}
              placeholder="Type your message here.."
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:border-lime-400 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded bg-lime-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Send Message <Send size={16} />
            </button>
          </form>

          {/* Office info */}
          <div className="space-y-8">
            {offices.map((office) => (
              <div key={office.city}>
                <h3 className="mb-4 text-lg font-bold text-black">{office.city}</h3>
                <ul className="space-y-3">
                  <li>
                    <strong className="mb-1 block text-sm text-black">Address</strong>
                    <span className="text-sm">{office.address}</span>
                  </li>
                  <li>
                    <strong className="mb-1 block text-sm text-black">Phone</strong>
                    <span className="text-sm">{office.phone}</span>
                  </li>
                  <li>
                    <strong className="mb-1 block text-sm text-black">Email</strong>
                    <span className="text-sm">{office.email}</span>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
