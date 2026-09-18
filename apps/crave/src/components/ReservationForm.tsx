import { useState, type FormEvent } from 'react'
import { User, Mail, Phone, Calendar, Users } from 'lucide-react'

const fields = [
  { name: 'name', placeholder: 'Your Name', icon: User, type: 'text' },
  { name: 'email', placeholder: 'Email Address', icon: Mail, type: 'email' },
  { name: 'phone', placeholder: 'Phone Number', icon: Phone, type: 'tel' },
  { name: 'date', placeholder: 'Select Date', icon: Calendar, type: 'date' },
  { name: 'people', placeholder: 'Number of People', icon: Users, type: 'number' },
]

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          {/* Left text */}
          <div className="w-full md:w-5/12">
            <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">Reservation</h4>
            <h2 className="mb-4 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
              Get a table at Crave
            </h2>
            <p className="leading-relaxed text-gray-500">
              Reserve your spot for an unforgettable dining experience. Our team is ready to welcome
              you with the finest dishes and exceptional service.
            </p>
          </div>

          {/* Right form */}
          <div className="w-full md:w-7/12">
            <div
              className="rounded-lg bg-cover bg-center p-6 sm:p-10"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/crave-reserve/700/400)',
              }}
            >
              <div className="relative rounded-lg bg-[rgba(2,1,15,0.6)] p-6 sm:p-10">
                <h3 className="mb-6 text-center font-heading text-xl font-bold text-white">
                  Book A Table
                </h3>

                {submitted ? (
                  <p className="text-center text-lg font-semibold text-white">
                    Thank you! Your reservation request has been received.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {fields.map((field) => (
                      <div key={field.name} className="flex items-center">
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          name={field.name}
                          required
                          className="flex-1 px-4 py-3 text-sm text-white placeholder-gray-400 outline-none"
                        />
                        <span className="flex items-center justify-center bg-white px-4 py-3">
                          <field.icon className="h-4 w-4 text-gray-400" />
                        </span>
                      </div>
                    ))}
                    <div className="pt-4 text-center">
                      <button
                        type="submit"
                        className="rounded-full bg-brand px-10 py-3 font-sans text-sm font-bold text-white shadow-lg transition-colors hover:bg-red-700"
                      >
                        Make Reservation
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
