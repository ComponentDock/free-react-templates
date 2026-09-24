import { Mail } from 'lucide-react'
import { useState } from 'react'

export function Newsletter() {
  const [email, setEmail] = useState('')

  return (
    <div className="bg-section-bg p-6">
      <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
        Newsletter
      </h2>
      <div className="text-center">
        <Mail className="w-10 h-10 text-brand mx-auto mb-3" />
        <h3 className="text-base font-heading font-medium text-heading mb-2">
          Subscribe to our Newsletter
        </h3>
        <p className="text-xs text-body mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua
        </p>
        <div className="flex">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 text-sm px-4 py-2 border border-gray-200 bg-white focus:outline-none focus:border-brand"
            aria-label="Email address"
          />
          <button className="bg-brand text-white text-xs font-heading font-medium px-5 py-2 hover:bg-transparent hover:text-brand border border-brand transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}
