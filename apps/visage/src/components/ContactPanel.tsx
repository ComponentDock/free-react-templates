import { Send } from 'lucide-react'
import { useState } from 'react'

export function ContactPanel() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold text-brand-dark">Contact Me</h3>
      {submitted ? (
        <div className="rounded-lg border border-green-200 bg-green-50 p-6 text-center">
          <p className="text-sm font-medium text-green-700">
            Thank you! Your message has been sent.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="rounded border border-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="rounded border border-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand"
          />
          <textarea
            placeholder="Message"
            rows={5}
            required
            className="w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm text-brand-dark outline-none transition-colors focus:border-brand"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      )}
    </div>
  )
}
