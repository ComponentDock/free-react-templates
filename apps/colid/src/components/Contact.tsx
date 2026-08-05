import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-b from-primary-300 to-primary-500 py-16 text-white sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Contact with us</h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/85">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus
              at, facere harum fugiat!
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  <strong>Address:</strong> Box 564, Disneyland USA
                </p>
              </div>
              <div className="flex gap-4">
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  <strong>Telephone:</strong> +880****6495 · +880****0471
                </p>
              </div>
              <div className="flex gap-4">
                <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="text-sm leading-relaxed">
                  <strong>E-mail:</strong> youremail@example.com · example@mail.com
                </p>
              </div>
            </div>
          </div>

          <form
            aria-label="Contact form"
            onSubmit={(event) => event.preventDefault()}
            className="rounded-md bg-white/10 p-8 backdrop-blur"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  aria-label="Your name"
                  className="w-full rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="Your email"
                  aria-label="Your email"
                  className="w-full rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="contact-subject" className="sr-only">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="Subject"
                aria-label="Subject"
                className="w-full rounded-full border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="contact-message" className="sr-only">
                Your message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Your message"
                aria-label="Your message"
                className="w-full rounded-2xl border border-white/30 bg-transparent px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="mt-6 rounded-full bg-white px-10 py-3 text-sm font-medium text-primary-500 transition-colors hover:bg-primary-600 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/20 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/80">
            Copyright © {new Date().getFullYear()} Colid. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}
