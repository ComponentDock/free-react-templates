import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const inputClasses =
  'h-12 w-full border-2 border-gray-300 bg-white px-4 text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none'

export function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#f4f5f9] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-xl text-[#ababab]">Get In Touch</span>
          <h2 className="mt-2 text-3xl font-black text-brand md:text-[2.5rem]">Contact Us</h2>
          <p className="mt-4 text-muted">
            Questions about memberships, classes, or personal training? Drop us a message and we
            will get back to you within one business day.
          </p>
        </div>

        {sent ? (
          <div
            role="status"
            className="mx-auto max-w-xl border-2 border-brand bg-white p-8 text-center"
          >
            <p className="text-lg font-bold text-ink">Thanks — your message has been sent!</p>
            <p className="mt-2 text-muted">Our team will reply to your email shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-3xl bg-white p-8 shadow-[0_5px_20px_0_rgba(0,0,0,0.05)]"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-bold text-ink">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-bold text-ink">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="subject" className="mb-2 block text-sm font-bold text-ink">
                Subject
              </label>
              <input id="subject" name="subject" type="text" required className={inputClasses} />
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block text-sm font-bold text-ink">
                Email
              </label>
              <input id="email" name="email" type="email" required className={inputClasses} />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="mb-2 block text-sm font-bold text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Write your message here."
                className="w-full border-2 border-gray-300 bg-white px-4 py-3 text-ink placeholder:text-gray-400 focus:border-brand focus:outline-none"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-8 w-full rounded-none px-8 text-xs font-black uppercase tracking-wide"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Send Message
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
