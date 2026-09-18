import { useState, type FormEvent } from 'react'
import { ChevronDown } from 'lucide-react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div
      className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      style={{
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
      }}
    >
      {submitted ? (
        <div className="py-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Thank you!</h2>
          <p className="mb-6 text-gray-600">
            Your message has been sent. We&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="rounded-full px-6 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{
              background: 'linear-gradient(to right, #00d2ff, #ff00ff)',
            }}
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: '#222222' }}>
            Say Hello!
          </h2>

          <div className="space-y-5">
            <FormField label="Your Name" htmlFor="name">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-cyan-400"
              />
            </FormField>

            <FormField label="Email" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-cyan-400"
              />
            </FormField>

            <FormField label="Needed Services" htmlFor="services">
              <div className="relative">
                <select
                  id="services"
                  name="services"
                  required
                  className="w-full appearance-none border-b border-gray-300 bg-transparent py-2 pr-8 text-sm text-gray-900 outline-none focus:border-cyan-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select a service
                  </option>
                  <option value="online-store">Online Store</option>
                  <option value="web-design">Web Design</option>
                  <option value="seo">SEO</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </FormField>

            <FormField label="Budget" htmlFor="budget">
              <div className="relative">
                <select
                  id="budget"
                  name="budget"
                  required
                  className="w-full appearance-none border-b border-gray-300 bg-transparent py-2 pr-8 text-sm text-gray-900 outline-none focus:border-cyan-400"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select budget
                  </option>
                  <option value="under-1000">Under $1,000</option>
                  <option value="1000-5000">$1,000 – $5,000</option>
                  <option value="5000-10000">$5,000 – $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </FormField>

            <FormField label="Message" htmlFor="message">
              <textarea
                id="message"
                name="message"
                required
                placeholder="Your message here..."
                rows={4}
                className="w-full resize-none border-b border-gray-300 bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-cyan-400"
              />
            </FormField>
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:opacity-90"
            style={{
              background: 'linear-gradient(to right, #00d2ff, #ff00ff)',
              borderRadius: '24px',
            }}
          >
            Submit →
          </button>
        </form>
      )}
    </div>
  )
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1 block text-xs font-normal"
        style={{ color: '#555555' }}
      >
        {label}
      </label>
      {children}
    </div>
  )
}
