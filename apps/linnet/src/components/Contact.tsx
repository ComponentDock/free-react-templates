import { MapPin, Phone, Mail } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

export function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 font-heading text-3xl font-bold text-navy-500">Contact Now</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {/* Form */}
          <form className="space-y-4 md:col-span-2" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={5}
              required
              className="w-full rounded border border-gray-300 px-4 py-3 text-sm text-gray-700 outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400"
            />
            <button
              type="submit"
              className="rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Send Now
            </button>
          </form>

          {/* Contact info */}
          <div>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-gray-500">
                  160 Link Road
                  <br />
                  Dhaka-1216, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-gray-500">(+00) 99 33 247</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary-400" />
                <span className="text-sm text-gray-500">info&#64;linnet.com</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-primary-400">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-primary-400">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-primary-400">
                <FacebookIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
