import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setForm(initialForm)
  }

  const update = (field: keyof typeof initialForm) => (value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  return (
    <section id="contact" className="py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-black dark:text-white">
            Get In Touch With Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5 rounded-lg bg-paper p-8 dark:bg-gray-800"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(event) => update('name')(event.target.value)}
                  className="mt-2 h-11 w-full rounded-md border border-transparent bg-white px-4 text-sm text-gray-900 focus:border-brand focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-200"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(event) => update('email')(event.target.value)}
                  className="mt-2 h-11 w-full rounded-md border border-transparent bg-white px-4 text-sm text-gray-900 focus:border-brand focus:outline-none dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(event) => update('subject')(event.target.value)}
                className="mt-2 h-11 w-full rounded-md border border-transparent bg-white px-4 text-sm text-gray-900 focus:border-brand focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                value={form.message}
                onChange={(event) => update('message')(event.target.value)}
                placeholder="Write your notes or questions here..."
                className="mt-2 w-full rounded-md border border-transparent bg-white px-4 py-3 text-sm text-gray-900 focus:border-brand focus:outline-none dark:bg-gray-700 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="justify-self-start rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-strong"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-extrabold text-black dark:text-white">Contact Details</h2>
          <ul className="mt-8 space-y-6 text-sm font-light text-gray-600 dark:text-gray-300">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="pt-2">120 Raymond Rd, New York</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <a href="tel:+842239000" className="pt-2 transition-colors hover:text-brand">
                +84 223 9000
              </a>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <a
                href="mailto:info.deercreative@gmail.com"
                className="pt-2 transition-colors hover:text-brand"
              >
                info.deercreative@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
