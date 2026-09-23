import { useState } from 'react'
import { Phone } from 'lucide-react'

export function Consultation() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [description, setDescription] = useState('')

  return (
    <section id="contact" className="bg-navy py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold uppercase md:text-4xl">
            We Are An International Law Group, Provides High{' '}
            <span className="text-brand">Quality Service</span>
          </h2>
          <p className="mb-8 text-gray-300">
            Our experienced attorneys are ready to help you with any legal matter. Contact us today
            for a free initial consultation.
          </p>
          <div className="flex items-center gap-3 rounded bg-white/10 px-6 py-4">
            <Phone size={20} className="text-brand" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Call Now For Immediate Assistance
            </span>
          </div>
        </div>

        <div className="rounded bg-white p-8 text-gray-900">
          <h3 className="mb-6 text-2xl font-bold">Request a free consultation</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <textarea
              placeholder="Case Description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none border border-gray-300 px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
            />
            <button
              type="submit"
              className="w-full bg-brand py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-amber-600"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
