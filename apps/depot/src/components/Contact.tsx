import { Mail, MapPin, Phone } from 'lucide-react'
import type { FormEvent } from 'react'

const inputClass =
  'h-[43px] w-full rounded border border-[#ced4da] bg-white px-4 text-sm text-black outline-none transition-colors focus:border-brand'

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="contact-section" aria-label="Contact Us" className="bg-section py-24">
      <div className="mx-auto max-w-[1170px] px-4">
        <h2 className="font-heading text-3xl font-light uppercase text-black md:text-4xl">
          Contact Us
        </h2>
        <p className="mt-2 text-body">Get In Touch</p>
        <div className="mt-14 grid gap-12 md:grid-cols-12">
          <form onSubmit={handleSubmit} className="grid gap-5 md:col-span-7 md:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-black">
                First Name
              </label>
              <input id="first-name" name="first-name" type="text" className={inputClass} />
            </div>
            <div>
              <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-black">
                Last Name
              </label>
              <input id="last-name" name="last-name" type="text" className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-black">
                Email
              </label>
              <input id="email" name="email" type="email" className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-black">
                Subject
              </label>
              <input id="subject" name="subject" type="text" className={inputClass} />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-black">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded border border-[#ced4da] bg-white px-4 py-3 text-sm text-black outline-none transition-colors focus:border-brand"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="rounded bg-brand px-8 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="space-y-6 md:col-span-4">
            <div>
              <h3 className="font-heading text-lg font-light uppercase text-black">Address</h3>
              <p className="mt-2 flex items-start gap-2 text-body">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-light uppercase text-black">Phone</h3>
              <p className="mt-2 flex items-center gap-2 text-body">
                <Phone className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                +1 232 3235 324
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-light uppercase text-black">
                Email Address
              </h3>
              <p className="mt-2 flex items-center gap-2 text-body">
                <Mail className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                youremail@domain.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
