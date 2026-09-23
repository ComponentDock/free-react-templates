import { useState } from 'react'
import { Send } from 'lucide-react'

export function ConsultationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="consultation"
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url('https://picsum.photos/seed/justlaw-contact-bg/1920/800')`,
      }}
    >
      <div className="absolute inset-0 bg-navy/80" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8">
        <h2 className="mb-12 text-center font-display text-4xl font-bold text-white md:text-5xl">
          Free Consultation
        </h2>

        {submitted ? (
          <div className="rounded-lg bg-white/10 p-8 text-center text-white backdrop-blur-sm">
            <p className="text-lg">Thank you! We will contact you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="rounded bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                required
                className="rounded bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <select
                name="practice"
                required
                className="rounded bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Select Practice Area</option>
                <option value="vehicle-accident">Vehicle Accident</option>
                <option value="health-law">Health Law</option>
                <option value="insurance-law">Insurance Law</option>
                <option value="bankruptcy">Bankruptcy</option>
              </select>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="rounded bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full resize-none rounded bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-primary-500"
            />
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded bg-primary-500 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-primary-600"
              >
                Submit Now
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
