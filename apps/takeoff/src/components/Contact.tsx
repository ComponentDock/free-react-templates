import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

export function Contact() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <section id="contact" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Contact US
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Have a question or a project in mind? We would love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <form className="space-y-4" aria-label="Contact message form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium text-ink dark:text-white">Your Name</span>
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-ink dark:text-white">
                  Your Email address
                </span>
                <input
                  type="email"
                  placeholder="Your Email address*"
                  className="mt-2 w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-ink dark:text-white">Your Subject</span>
              <input
                type="text"
                placeholder="Your Subject*"
                className="mt-2 w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-ink dark:text-white">Your Message</span>
              <textarea
                rows={5}
                placeholder="Your Message*"
                className="mt-2 w-full resize-none rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-primary-600 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
            </label>
            <Button className="rounded-full px-10">Send Message</Button>
          </form>

          <div className="flex flex-col justify-center rounded-2xl bg-primary-600 p-10 text-center">
            <h3 className="font-display text-2xl font-bold text-white">
              Subscribe to our Newsletter
            </h3>
            <p className="mt-3 leading-relaxed text-white/85">
              Get product updates, tips, and launch news straight to your inbox.
            </p>
            <form
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              onSubmit={handleNewsletterSubmit}
            >
              <label className="sr-only" htmlFor="newsletter-email">
                Newsletter email
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white placeholder-white/60 outline-none transition-colors focus:border-white"
              />
              <Button type="submit" className="rounded-full bg-night px-8 text-white hover:bg-ink">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
