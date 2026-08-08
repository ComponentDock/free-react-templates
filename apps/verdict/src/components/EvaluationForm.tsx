import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const practiceAreas = [
  'Corporate Law',
  'Litigation',
  'Real Estate',
  'Family Law',
  'Estate Planning',
  'Criminal Defense',
]

export function EvaluationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [practiceArea, setPracticeArea] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (!name.trim()) nextErrors.name = 'Please enter your full name.'
    if (!emailPattern.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!phone.trim()) nextErrors.phone = 'Please enter your phone number.'
    if (!practiceArea) nextErrors.practiceArea = 'Please select a practice area.'
    if (!message.trim()) nextErrors.message = 'Please briefly describe your case.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  const inputClasses =
    'mt-2 w-full rounded-lg border border-white/30 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-gray-400 focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30'

  return (
    <div className="rounded-2xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
      {sent ? (
        <div
          role="status"
          className="flex h-full min-h-64 flex-col items-center justify-center text-center"
        >
          <p className="font-display text-2xl font-bold text-white">Request received!</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-300">
            Thank you, {name}. One of our attorneys will contact you within one business day.
          </p>
        </div>
      ) : (
        <>
          <h3 className="font-display text-2xl font-bold text-white">Free Case Evaluation</h3>
          <p className="mt-2 text-sm text-gray-300">
            Get expert legal advice. Tell us about your case.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="evaluation-name" className="text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                id="evaluation-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClasses}
              />
              {errors.name && (
                <p role="alert" className="mt-2 text-sm text-accent-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="evaluation-email" className="text-sm font-medium text-gray-200">
                Email Address
              </label>
              <input
                id="evaluation-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClasses}
              />
              {errors.email && (
                <p role="alert" className="mt-2 text-sm text-accent-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="evaluation-phone" className="text-sm font-medium text-gray-200">
                Phone Number
              </label>
              <input
                id="evaluation-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={inputClasses}
              />
              {errors.phone && (
                <p role="alert" className="mt-2 text-sm text-accent-400">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="evaluation-practice" className="text-sm font-medium text-gray-200">
                Practice Area
              </label>
              <select
                id="evaluation-practice"
                value={practiceArea}
                onChange={(e) => setPracticeArea(e.target.value)}
                className={inputClasses}
              >
                <option value="" className="text-gray-900">
                  Select Practice Area
                </option>
                {practiceAreas.map((area) => (
                  <option key={area} value={area} className="text-gray-900">
                    {area}
                  </option>
                ))}
              </select>
              {errors.practiceArea && (
                <p role="alert" className="mt-2 text-sm text-accent-400">
                  {errors.practiceArea}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="evaluation-message" className="text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="evaluation-message"
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Briefly describe your case"
                className={inputClasses}
              />
              {errors.message && (
                <p role="alert" className="mt-2 text-sm text-accent-400">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-accent-500 py-3 font-semibold text-primary-950 shadow-lg shadow-accent-500/25 hover:bg-accent-600"
            >
              Request Free Consultation
            </Button>

            <p className="text-center text-xs leading-relaxed text-gray-400">
              By submitting, you agree to our Privacy Policy. We respect your privacy.
            </p>
          </form>
        </>
      )}
    </div>
  )
}
