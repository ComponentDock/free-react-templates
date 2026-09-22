import { useState, type FormEvent } from 'react'

export function Register() {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [lastName, setLastName] = useState('')
  const [mobile, setMobile] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-5">
        {/* Form side */}
        <div className="md:col-span-3">
          <h2 className="mb-2 text-3xl font-semibold text-ink">Register Now</h2>
          <p className="mb-8 text-mist">
            The first 7 day trial is completely free with the trainer.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-ink">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-ink">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
              <div>
                <label htmlFor="mobile" className="mb-1 block text-sm font-medium text-ink">
                  Mobile No*
                </label>
                <input
                  id="mobile"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-btn-start to-btn-end px-8 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              Get Started
            </button>
          </form>
        </div>

        {/* Image side */}
        <div className="md:col-span-2">
          <img
            src="https://picsum.photos/seed/gymcore-register/500/600"
            alt="Register for membership"
            className="w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  )
}
