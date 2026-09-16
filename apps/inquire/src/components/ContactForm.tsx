import { type FormEvent, useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg bg-white p-10 shadow-lg">
        <h2 className="mb-4 text-2xl font-light text-gray-500">Thank You</h2>
        <p className="text-gray-600">
          Your message has been received. We will get back to you soon.
        </p>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg rounded-lg bg-white p-10 shadow-lg">
      <h2 className="mb-2 text-3xl font-light text-gray-400">Inquire</h2>
      <p className="mb-6 text-sm text-gray-500">Contact us for a custom quote</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          required
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email Address"
          required
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <input
          type="tel"
          placeholder="Your Phone Number (optional)"
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <input
          type="url"
          placeholder="Your Web Site (optional)"
          className="w-full rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <textarea
          placeholder="Type your message here...."
          required
          rows={5}
          className="w-full resize-none rounded border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500"
        />
        <button
          type="submit"
          className="w-full rounded bg-green-500 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
