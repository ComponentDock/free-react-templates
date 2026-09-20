import { useState, type FormEvent } from 'react'

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    }

  return (
    <section id="admission" className="py-20 bg-navy-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Apply for Admission</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange('phone')}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange('email')}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400"
            />
          </div>
          <textarea
            placeholder="Write an Application"
            rows={5}
            value={formData.message}
            onChange={handleChange('message')}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-brand-400 text-white px-10 py-3 rounded-full font-medium hover:bg-brand-500 transition-colors"
            >
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
