import type { FormEvent } from 'react'

const trustItems = [
  {
    title: 'Divided Evenly',
    description: 'Your donations are distributed evenly across all our active projects.',
  },
  {
    title: 'Transparency All the Way',
    description: 'We publish full financial reports so you know exactly where your money goes.',
  },
  {
    title: 'Trustworthy',
    description: 'Verified by independent auditors and rated highly by charity watchdogs.',
  },
]

function handleSubmit(e: FormEvent) {
  e.preventDefault()
}

export function Donate() {
  return (
    <section id="donate" className="relative py-20">
      {/* Dark parallax background */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/givingheart-donate/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Donate Now</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Your generosity can change lives. Every donation helps us provide essential resources to
            those in need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Trust info */}
          <div className="space-y-8">
            {trustItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Donation form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <select
              name="project"
              required
              className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            >
              <option value="" disabled className="text-gray-500">
                Project you want to donate
              </option>
              <option value="water">Clean Water Initiative</option>
              <option value="education">Education for All</option>
              <option value="healthcare">Healthcare Access</option>
            </select>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
              className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            />
            <input
              type="number"
              name="amount"
              placeholder="Donation amount (USD)"
              min="1"
              className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Your message (optional)"
              rows={4}
              className="w-full rounded-none border border-gray-600 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-primary focus:outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full rounded-[25px] bg-gradient-to-r from-[#f40f68] via-[#f86e3d] to-[#fbcd11] px-8 py-3 text-sm font-bold text-white uppercase tracking-wider transition opacity-90 hover:opacity-100"
            >
              donate
            </button>
            <p className="text-center text-xs text-gray-500 mt-2">
              We Accept — Visa, Mastercard, PayPal
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
