import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const projectTypes = [
  'Residential Construction',
  'Commercial Building',
  'Renovation & Remodeling',
  'Interior Design',
  'Other',
]

const contactDetails = [
  { label: 'Phone', value: '(555) 123-4567', icon: Phone },
  { label: 'Email', value: 'info@parapet.com', icon: Mail },
  { label: 'Address', value: '456 Construction Ave\nHouston, TX 77001', icon: MapPin },
  {
    label: 'Office Hours',
    value: 'Monday - Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 2:00 PM\nSunday: Closed',
    icon: Clock,
  },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [projectType, setProjectType] = useState('')
  const [details, setDetails] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!projectType) nextErrors.projectType = 'Please select a project type.'
    if (!details.trim()) nextErrors.details = 'Please tell us about your project.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Ready to start your project? Fill out the form below and our team will get back to you
            within 24 hours with a detailed estimate.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {sent ? (
              <div
                role="status"
                className="rounded-2xl border border-primary-200 bg-primary-50 p-10 text-center dark:border-primary-800 dark:bg-primary-900/30"
              >
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Quote request received!
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Thank you, {name}. Our team will contact you within 24 hours with a detailed
                  estimate.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    >
                      <option value="">Select a project type</option>
                      {projectTypes.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-details"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Project Details
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                    />
                    {errors.details && (
                      <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                        {errors.details}
                      </p>
                    )}
                  </div>
                </div>
                <Button type="submit" className="mt-8 w-full rounded-lg py-3 sm:w-auto">
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{detail.label}</h3>
                </div>
                <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
