import { Mail, MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Let&apos;s Work Together
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Have a project in mind or just want to chat? I&apos;d love to hear from you. Send a
              message and I&apos;ll get back to you within 24 hours.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="h-5 w-5 text-primary-500" aria-hidden="true" />
                hello@arlo.dev
              </li>
              <li className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="h-5 w-5 text-primary-500" aria-hidden="true" />
                San Francisco, CA
              </li>
            </ul>
          </div>

          <form
            className="rounded-2xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="jane@example.com"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <ButtonLink href="mailto:hello@arlo.dev" className="w-full">
                Send Message
              </ButtonLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
