import { useState } from 'react'

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
        <div className="w-full max-w-2xl rounded-lg bg-white p-12 shadow-md text-center">
          <p className="text-xl font-medium text-gray-800">Your message was sent, thank you!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-lg bg-white p-12 shadow-md">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Let&apos;s Talk</h2>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-gray-500">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-gray-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="mb-1 block text-sm text-gray-500">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full border-b border-gray-300 bg-transparent py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="mb-1 block text-sm text-gray-500">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[120px] resize-y border-b border-gray-300 bg-transparent py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-6 block mx-auto rounded-full bg-[#5c6bc0] px-10 py-3 text-sm font-medium uppercase tracking-widest text-white hover:bg-[#4a5ab5]"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
