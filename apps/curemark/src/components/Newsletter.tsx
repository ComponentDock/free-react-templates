import { useState } from 'react'
import { cn } from '@free-react-templates/ui'

interface NewsletterProps {
  className?: string
}

export function Newsletter({ className }: NewsletterProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <section className={cn('gradient-bg py-16', className)} aria-label="Newsletter subscription">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Subscribe to our newsletter
        </h2>
        <p className="text-white/80 mb-8 text-sm">
          Stay updated with the latest news, health tips, and exclusive offers.
        </p>
        {subscribed ? (
          <p className="text-white font-medium" role="status">
            Thank you for subscribing!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-sm text-body focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-brand-blue px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
