import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const fields = [
  { id: 'first-name', label: 'First Name', type: 'text' },
  { id: 'last-name', label: 'Last Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'subject', label: 'Subject', type: 'text' },
] as const

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-brand px-8 py-12 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Join over 1,700 companies that trust us.
          </h2>
          <a
            href="#pricing"
            className="mt-6 inline-block rounded bg-white px-7 py-3 text-sm font-semibold text-brand transition-colors hover:bg-ink hover:text-white"
          >
            Try it for free
          </a>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-ink dark:text-white">Get In Touch</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist dark:text-gray-400">
              Have a question about Boost? Send us a message and the team will get back to you
              within one business day.
            </p>
            <ul className="mt-8 space-y-5 text-sm text-mist dark:text-gray-400">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-ink dark:text-white">Address</span>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-ink dark:text-white">Phone</span>
                  +1 232 3235 324
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span>
                  <span className="block font-medium text-ink dark:text-white">Email</span>
                  <a
                    href="mailto:info@yourdomain.com"
                    className="text-brand transition-colors hover:text-ink dark:hover:text-white"
                  >
                    info@yourdomain.com
                  </a>
                </span>
              </li>
            </ul>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-line bg-white p-8 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((field) => (
                <div key={field.id} className={field.id === 'subject' ? 'sm:col-span-2' : ''}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-medium text-ink dark:text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    className="mt-2 w-full rounded border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              ))}
            </div>
            <div className="mt-5">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded border border-line bg-paper px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-brand dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="mt-6 rounded bg-brand px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:brightness-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
