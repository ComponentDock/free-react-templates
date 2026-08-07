import { useState, type FormEvent } from 'react'

const services = [
  'Construction',
  'Renovation',
  'Interior Design',
  'Exterior Design',
  'Painting',
] as const

export function Quote() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [service, setService] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <section id="quote" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/beamline-quote/900/700"
            alt="Modern building facade with white vertical slats"
            className="h-full min-h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-brand/50" />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Be Part of our Business
              </p>
              <h3 className="mt-2 text-2xl font-bold text-ink dark:text-white">Request A Quote</h3>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    aria-label="First Name"
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    aria-label="Last Name"
                    className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  aria-label="Select your services"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <option value="">Select Your Services</option>
                  {services.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-label="Phone"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                <textarea
                  placeholder="Message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-label="Message"
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-ink outline-none focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />

                <button
                  type="submit"
                  className="w-full rounded-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                >
                  Request A Quote
                </button>
              </form>
            </div>
          </div>
        </div>

        <div id="about">
          <h2 className="text-4xl font-extralight leading-tight text-ink dark:text-white">
            Beamline
          </h2>
          <p className="mt-6 text-base leading-relaxed text-mist dark:text-gray-300">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia. It is a paradisematic country, in which roasted parts of sentences fly into
            your mouth.
          </p>
          <p className="mt-4 text-base leading-relaxed text-mist dark:text-gray-300">
            On her way she met a copy. The copy warned the Little Blind Text, that where it came
            from it would have been rewritten a thousand times and everything that was left from its
            origin would be the word "and" and the Little Blind Text should turn around and return
            to its own, safe country.
          </p>
        </div>
      </div>
    </section>
  )
}
