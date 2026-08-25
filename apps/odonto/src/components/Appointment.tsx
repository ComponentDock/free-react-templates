import { useState } from 'react'

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="appointment" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">Make An Appointment</h2>
          <p className="text-center text-gray-600 mb-8">Easy Booking — fill out the form below</p>
          {submitted ? (
            <div
              className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center"
              role="status"
            >
              <h3 className="text-xl font-bold text-teal-700 mb-2">Appointment Requested!</h3>
              <p className="text-teal-600">We will contact you shortly to confirm your booking.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="checkup">General Checkup</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implant">Dental Implant</option>
                    <option value="extraction">Tooth Extraction</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors"
              >
                Request Appointment
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
