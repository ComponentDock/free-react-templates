import { useState, type FormEvent } from 'react'
import { CalendarCheck } from 'lucide-react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Appointment() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [petType, setPetType] = useState('Dog')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const [booked, setBooked] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: FormErrors = {}
    if (!name.trim()) nextErrors.name = 'Please enter your name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!message.trim()) nextErrors.message = 'Please tell us a little about your pet.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setBooked(true)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="bg-brand py-16 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-white">Free Consultation</h2>
        <p className="mt-4 text-center font-light text-white/90">
          Tell us about your pet and we will get back to you within one business day.
        </p>

        {booked ? (
          <p
            role="status"
            className="mt-10 rounded-lg bg-white px-6 py-5 text-center font-semibold text-brand"
          >
            Thanks! Your consultation request received — we will be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="appointment-name"
                  className="mb-1 block text-sm font-bold text-night dark:text-white"
                >
                  Your Name
                </label>
                <input
                  id="appointment-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-night focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
                {errors.name && (
                  <p role="alert" className="mt-1 text-xs font-semibold text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="appointment-email"
                  className="mb-1 block text-sm font-bold text-night dark:text-white"
                >
                  Email Address
                </label>
                <input
                  id="appointment-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-night focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                />
                {errors.email && (
                  <p role="alert" className="mt-1 text-xs font-semibold text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="appointment-pet"
                  className="mb-1 block text-sm font-bold text-night dark:text-white"
                >
                  Pet Type
                </label>
                <select
                  id="appointment-pet"
                  value={petType}
                  onChange={(e) => setPetType(e.target.value)}
                  className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-night focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                >
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label
                htmlFor="appointment-message"
                className="mb-1 block text-sm font-bold text-night dark:text-white"
              >
                Message
              </label>
              <textarea
                id="appointment-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full rounded-md border border-gray-200 px-4 py-2.5 text-sm text-night focus:border-brand focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              />
              {errors.message && (
                <p role="alert" className="mt-1 text-xs font-semibold text-red-500">
                  {errors.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-strong sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Book Consultation
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
