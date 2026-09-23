import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '2820 Maple Avenue, Portland, OR 97201' },
  { icon: Phone, label: 'Phone', value: '+1 (503) 555-0142' },
  { icon: Mail, label: 'Email', value: 'franklin@example.com' },
  { icon: Globe, label: 'Website', value: 'www.example.com' },
] as const

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">Contact</p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">Contact Me</h2>
        </div>

        {/* Info cards */}
        <div className="mb-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {contactInfo.map((info) => (
            <div key={info.label} className="rounded-lg bg-paper p-6 text-center dark:bg-gray-800">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white">
                <info.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-1 text-sm font-bold uppercase tracking-wider text-ink dark:text-white">
                {info.label}
              </h3>
              <p className="text-sm text-muted dark:text-gray-400">{info.value}</p>
            </div>
          ))}
        </div>

        {/* Form + Map */}
        <div className="grid gap-8 lg:grid-cols-2">
          {submitted ? (
            <div className="flex items-center justify-center rounded-lg bg-paper p-12 dark:bg-gray-800">
              <p className="text-lg font-medium text-brand">
                Thank you! Your message has been sent.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <textarea
                placeholder="Message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-gray-200 bg-paper px-4 py-3 text-sm text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="rounded-full bg-primary-500 px-8 py-3 text-white hover:bg-primary-600"
              >
                Send Message
              </Button>
            </form>
          )}
          <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
            <img
              src="https://picsum.photos/seed/pageturn-map/700/500"
              alt="Map placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
