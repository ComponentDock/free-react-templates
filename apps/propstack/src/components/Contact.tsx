import { useState, type FormEvent } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">Get In Touch</h2>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            {submitted ? (
              <div className="rounded-lg bg-white p-8 text-center shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-gray-900">Thank you!</h3>
                <p className="text-gray-500">
                  Your message has been sent. We will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-700 outline-none focus:border-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-700 outline-none focus:border-primary"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="rounded-full border border-gray-200 px-5 py-3 text-sm text-gray-700 outline-none focus:border-primary"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  className="resize-none rounded-2xl border border-gray-200 px-5 py-3 text-sm text-gray-700 outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">Address</h3>
              <p className="text-gray-500">273, Westloor, San Francisco, CA</p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">Phone</h3>
              <p className="text-gray-500">+1 (234) 567 8910</p>
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-500">info@propstack.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
