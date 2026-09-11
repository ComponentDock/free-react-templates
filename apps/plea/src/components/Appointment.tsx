import { useState } from 'react'
import { Send } from 'lucide-react'

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="appointment"
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/plea-appt/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Make an Appointment</h2>
          <p className="mt-4 text-white/70">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>

        {submitted ? (
          <div className="rounded-lg bg-white/10 p-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-white/80">
              Your appointment request has been submitted. We will contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167]"
            />
            <input
              type="date"
              name="date"
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167] md:col-span-2"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="rounded-md bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#589167] md:col-span-2"
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#589167] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a7a59]"
              >
                Submit
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
