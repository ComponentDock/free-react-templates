import { Send } from 'lucide-react'

const serviceOptions = [
  'House Washing',
  'Roof Cleaning',
  'Driveway Cleaning',
  'Gutter Cleaning',
  'Patio Cleaning',
  'Building Cleaning',
  'Concrete Cleaning',
  'Sidewalk Cleaning',
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/pw-contact-bg/1920/800)',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Free Consultation</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8"
          >
            <div className="mb-4">
              <select className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500">
                <option value="">Select services</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="date"
                className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500"
              />
              <input
                type="time"
                className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full bg-white text-dark-900 rounded px-4 py-3 text-sm border-0 focus:ring-2 focus:ring-brand-500 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-500 hover:bg-brand-600 text-white font-semibold px-6 py-3 rounded transition-colors flex items-center gap-2"
            >
              <Send size={16} /> Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
