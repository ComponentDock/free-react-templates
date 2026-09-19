import { useState } from 'react'

export function RegisterNow() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [site, setSite] = useState('')

  return (
    <section
      id="register"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/learnwise-register/1920/600')" }}
    >
      <div className="absolute inset-0 bg-register-overlay" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4 rounded-lg bg-white p-8 shadow-lg"
            aria-label="Registration form"
          >
            <h4 className="mb-4 text-xl font-bold text-gray-800">Courses For Free</h4>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <input
              type="text"
              placeholder="Site"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-primary py-3 text-sm font-semibold uppercase text-white hover:bg-primary-hover"
            >
              Send Message
            </button>
          </form>

          {/* CTA text */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-4 font-heading text-3xl font-bold text-gray-800">Register Now</h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              Join thousands of students who are already learning with us. Our courses are designed
              by industry experts and cover everything from basics to advanced topics. Start your
              learning journey today.
            </p>
            <div className="flex gap-4">
              <div className="rounded-md bg-primary/10 px-4 py-3 text-center">
                <span className="block text-2xl font-bold text-primary">120+</span>
                <span className="text-xs text-gray-500">Courses</span>
              </div>
              <div className="rounded-md bg-primary/10 px-4 py-3 text-center">
                <span className="block text-2xl font-bold text-primary">50+</span>
                <span className="text-xs text-gray-500">Instructors</span>
              </div>
              <div className="rounded-md bg-primary/10 px-4 py-3 text-center">
                <span className="block text-2xl font-bold text-primary">10K+</span>
                <span className="text-xs text-gray-500">Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
