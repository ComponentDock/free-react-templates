import { type FormEvent, useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="section-contact" className="bg-dark py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-[100px] h-1 bg-brand" />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider mb-12 font-heading">
          Contact
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="text-white text-sm block mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="text-white text-sm block mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 px-0 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-white text-sm block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 px-0 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="subject" className="text-white text-sm block mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 px-0 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label htmlFor="message" className="text-white text-sm block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={7}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your notes or questions here..."
              className="w-full bg-transparent border-b-2 border-white/30 text-white py-2 px-0 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-brand text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand/80 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
