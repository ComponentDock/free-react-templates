import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send, Users } from 'lucide-react'
import { Button } from '@free-react-templates/ui'
import { DribbbleIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './social-icons'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const services = ['Web Design', 'Mobile Apps', 'Brand Identity', 'Digital Marketing', 'Other']

const budgets = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+']

const socials = [
  { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
  { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', Icon: LinkedinIcon },
  { label: 'Dribbble', href: 'https://dribbble.com', Icon: DribbbleIcon },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [service, setService] = useState('')
  const [budget, setBudget] = useState('')
  const [details, setDetails] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!service) nextErrors.service = 'Please select a service.'
    if (!budget) nextErrors.budget = 'Please select a budget range.'
    if (!details.trim()) nextErrors.details = 'Please tell us about your project.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  const inputClasses =
    'mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-400'

  return (
    <section id="contact" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Have a project in mind? We&apos;d love to hear about it. Fill out the form below and
            we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Email Us</h3>
                <a
                  href="mailto:hello@kreativ.studio"
                  className="mt-1 block text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  hello@kreativ.studio
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Call Us</h3>
                <a
                  href="tel:+15559876543"
                  className="mt-1 block text-gray-600 transition-colors hover:text-primary-500 dark:text-gray-400"
                >
                  (555) 987-6543
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Visit Us</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  456 Creative Ave, Suite 200
                  <br />
                  Los Angeles, CA 90028
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Follow Us</h3>
                <div className="mt-2 flex items-center gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:bg-primary-500 hover:text-white dark:bg-gray-800 dark:text-gray-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          {sent ? (
            <div
              role="status"
              className="flex flex-col items-center justify-center rounded-2xl border border-primary-200 bg-primary-50 p-10 text-center dark:border-primary-800 dark:bg-primary-900/30"
            >
              <p className="text-lg font-semibold text-gray-900 dark:text-white">
                Message sent successfully!
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Thank you, {name}. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
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
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                  />
                  {errors.email && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-company"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Company (optional)
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-service"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select a service</option>
                    {services.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={inputClasses}
                  >
                    <option value="">Select a budget range</option>
                    {budgets.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.budget}
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
                    className={inputClasses}
                  />
                  {errors.details && (
                    <p role="alert" className="mt-2 text-sm text-red-600 dark:text-red-400">
                      {errors.details}
                    </p>
                  )}
                </div>
              </div>
              <Button type="submit" className="mt-8 w-full rounded-full py-4 sm:w-auto">
                <Send className="h-4 w-4" aria-hidden="true" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
