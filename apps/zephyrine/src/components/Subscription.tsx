import { useState } from 'react'

export function Subscription() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section className="bg-white py-20">
      <div className="max-w-[68.75%] mx-auto px-4 text-center">
        <h2 className="text-[#222222] text-2xl md:text-3xl font-semibold mb-6">
          Subscribe for our Newsletter
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-6 py-3 border border-gray-300 rounded-[20px] text-sm focus:outline-none focus:border-[#e66686] transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3 rounded-[20px] text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}
          >
            Get Started
          </button>
        </form>
      </div>
    </section>
  )
}
