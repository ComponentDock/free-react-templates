import { type FormEvent, useState } from 'react'
import { Briefcase, ThumbsUp, Users } from 'lucide-react'

const stats = [
  { icon: Briefcase, value: '120', label: 'Project Done' },
  { icon: ThumbsUp, value: '100', label: 'Happy Clients' },
  { icon: Users, value: '30', label: 'Team Members' },
] as const

export function About() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [type, setType] = useState('')
  const [quantity, setQuantity] = useState('')
  const [destination, setDestination] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="about" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Quote form */}
          <div className="lg:col-span-5">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-ink">Get A Quote</h3>
              {submitted ? (
                <p className="text-sm text-brand">Thank you! We will contact you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Type"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                      className="rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                    />
                    <input
                      type="text"
                      placeholder="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                  <textarea
                    placeholder="Your Message..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand"
                  />
                  <button
                    type="submit"
                    className="rounded-[3px] bg-brand px-6 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* About content */}
          <div className="lg:col-span-7 lg:pl-8">
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              We have 25 years experience in this passion
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which
              don&apos;t look even slightly believable. If you are going to use a passage of Lorem
              Ipsum.
            </p>
            <a href="#" className="mt-4 inline-block text-sm font-bold text-brand hover:underline">
              Read More →
            </a>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="mx-auto h-6 w-6 text-brand" aria-hidden="true" />
                  <h4 className="mt-2 text-2xl font-bold text-ink">{stat.value}</h4>
                  <p className="text-xs text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
