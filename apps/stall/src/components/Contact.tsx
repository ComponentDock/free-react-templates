import { useState } from 'react'
import { Send } from 'lucide-react'

export function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const update =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))

  return (
    <section id="contact" className="bg-light-bg py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Get In Touch
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <p className="mt-4 text-center text-body">
          Have a question or want to work together? Fill out the form below.
        </p>
        <form className="mt-10 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-1 block text-sm font-bold text-heading">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={update('firstName')}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="mb-1 block text-sm font-bold text-heading">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={update('lastName')}
                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-bold text-heading">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={update('email')}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-1 block text-sm font-bold text-heading">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={update('subject')}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-bold text-heading">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 outline-none focus:border-brand"
            />
          </div>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-none bg-gray-900 px-8 py-3 text-sm font-black uppercase text-white transition-colors hover:bg-brand"
          >
            <Send className="h-4 w-4" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
