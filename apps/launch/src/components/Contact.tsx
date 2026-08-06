import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { SocialLinks } from './SocialLinks'

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
              Contact Us
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and
              we&apos;ll respond as soon as possible.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-first"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  id="contact-first"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-last"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  id="contact-last"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="sm:col-span-2">
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
                  className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <div className="sm:col-span-2">
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
                  className="w-full resize-none rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-100"
                />
              </div>
              <Button type="submit" className="rounded-full px-8 sm:col-span-2">
                Send Message
              </Button>
            </form>
          </div>

          <div className="grid content-start gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-100 bg-paper p-6 dark:border-gray-800 dark:bg-gray-900">
              <MapPin className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Visit Us
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                43 Raymouth Rd. Baltimore, London 3910
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-paper p-6 dark:border-gray-800 dark:bg-gray-900">
              <Phone className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Call Us
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">+1 (123) 456-7891</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-paper p-6 dark:border-gray-800 dark:bg-gray-900">
              <Mail className="h-6 w-6 text-primary-500" aria-hidden="true" />
              <h3 className="mt-3 font-display text-lg font-semibold text-ink dark:text-white">
                Email Us
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">hello@launch.com</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">support@launch.com</p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-paper p-6 dark:border-gray-800 dark:bg-gray-900">
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
