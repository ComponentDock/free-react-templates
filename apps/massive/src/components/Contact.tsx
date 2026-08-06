import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="bg-gray-50 py-16 sm:py-24 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-teal dark:text-cyan">
              Contact Us
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
              Get In Touch
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              Have a question about Massive? Send us a message and we&apos;ll respond as soon as
              possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/30 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/30 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/30 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-100"
                />
              </div>
              <Button type="submit" className="rounded-full px-8">
                Send Message
              </Button>
            </form>
          </div>

          <div className="grid content-start gap-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <MapPin className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Visit Us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                43 Raymouth Rd. Baltimore, London 3910
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <Phone className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Call Us
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+1 (123) 456-7891</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <Mail className="h-6 w-6 text-teal" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Email Us
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">hello@massive.app</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">support@massive.app</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 dark:border-gray-800 dark:bg-gray-950">
              <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                Follow Us
              </h3>
              <div className="mt-4">
                <SocialLinks inverted />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
