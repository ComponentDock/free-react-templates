import { useState, type FormEvent, type ChangeEvent } from 'react'

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleFormSubmit = (e: FormEvent) => {
    handleSubmit(e)
    setSubmitted(true)
  }

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="space-y-6 border-r-0 pr-0 lg:border-r lg:border-input-border lg:pr-16"
      >
        <div className="flex flex-col gap-6 sm:flex-row">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="h-14 w-full border-b border-input-border bg-transparent px-0 text-sm text-text-primary placeholder:text-text-secondary focus:border-input-focus focus:outline-none focus:ring-0"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="h-14 w-full border-b border-input-border bg-transparent px-0 text-sm text-text-primary placeholder:text-text-secondary focus:border-input-focus focus:outline-none focus:ring-0"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="h-14 w-full border-b border-input-border bg-transparent px-0 text-sm text-text-primary placeholder:text-text-secondary focus:border-input-focus focus:outline-none focus:ring-0"
        />
        <textarea
          name="message"
          placeholder="Write your message"
          rows={7}
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-y border-b border-input-border bg-transparent px-0 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-input-focus focus:outline-none focus:ring-0"
        />
        <button
          type="submit"
          className="h-14 bg-brand px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          Send Message
        </button>
      </form>
      {submitted && (
        <p className="mt-4 text-lg font-bold text-success">Your message was sent, thank you!</p>
      )}
    </div>
  )
}
