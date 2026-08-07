import { Mail, MapPin, Phone } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="bg-primary-50/50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-gray-100">
              Contact Us
            </h2>
            <p className="mt-5 leading-relaxed text-smoke dark:text-gray-400">
              Have a project in mind? We would love to hear about it. Send us an e-mail or give us a
              call.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href="mailto:hello@chroma.studio"
                  className="inline-flex items-center gap-3 font-medium text-ink transition-colors hover:text-primary-400 dark:text-gray-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-400 text-white">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  hello@chroma.studio
                </a>
              </li>
              <li>
                <a
                  href="tel:+1917123456"
                  className="inline-flex items-center gap-3 font-medium text-ink transition-colors hover:text-primary-400 dark:text-gray-200"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-400 text-white">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  +1 (917) 123 456
                </a>
              </li>
              <li className="inline-flex items-center gap-3 font-medium text-ink dark:text-gray-200">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-400 text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                1600 Amphitheatre Parkway, Mountain View, CA
              </li>
            </ul>
            <div className="mt-8">
              <div className="text-sm font-semibold uppercase tracking-wider text-smoke">
                Follow Us
              </div>
              <div className="mt-3">
                <SocialLinks />
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-ink p-10">
            <img
              src="https://picsum.photos/seed/chroma-studio/640/480"
              alt="The Chroma Studio team at work"
              className="h-auto w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
