import { useState } from 'react'

function handleSubmit(e: React.FormEvent) {
  e.preventDefault()
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full border-b border-input-border bg-transparent py-2 text-[16px] text-text-heading placeholder-text-info-label outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border-b border-input-border bg-transparent py-2 text-[16px] text-text-heading placeholder-text-info-label outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full border-b border-input-border bg-transparent py-2 text-[16px] text-text-heading placeholder-text-info-label outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Create a message here"
          rows={4}
          className="w-full resize-y border-b border-input-border bg-transparent py-2 text-[16px] text-text-heading placeholder-text-info-label outline-none focus:border-input-focus"
        />
      </div>
      <div>
        <button
          type="submit"
          className="mb-5 rounded-[5px] border border-brand-amber bg-brand-amber px-4 py-3 text-[14px] text-white shadow-[0px_10px_20px_-6px_rgba(0,0,0,0.12)] transition-all hover:border-brand-amber-dark hover:bg-brand-amber-dark hover:shadow-[0px_10px_20px_-6px_rgba(0,0,0,0.22)]"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}
