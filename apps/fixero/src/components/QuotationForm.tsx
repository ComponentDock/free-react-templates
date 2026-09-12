import { useState } from 'react'
import type { FormEvent } from 'react'

export function QuotationForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="md:w-5/12">
            <h2 className="mb-4 text-3xl font-bold text-ink dark:text-white">
              If You Have Project In Mind. Get A Quotation
            </h2>
            <div className="mb-6 h-1 w-16 bg-brand" />
            <p className="text-gray-600 dark:text-gray-400">
              We provide professional handyman and construction services. Tell us about your project
              and we will get back to you with a detailed quotation.
            </p>
          </div>
          <div className="md:w-6/12">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900"
            >
              <h3 className="mb-4 text-xl font-bold text-ink dark:text-white">Get Quotation</h3>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <button
                type="submit"
                className="rounded bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-orange-600"
              >
                Send Message
              </button>
              {submitted && (
                <p className="mt-3 text-sm text-green-600 dark:text-green-400">
                  Thank you! We will get back to you shortly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
