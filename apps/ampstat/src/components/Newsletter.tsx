import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section data-testid="newsletter" className="py-20 bg-brand-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-4">Subscribe & Follow</h2>
            <p className="text-white/70 text-base leading-relaxed">
              Stay up to date with the latest releases, tour dates, and exclusive content delivered
              straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <div className="md:w-1/2">
            {submitted ? (
              <p data-testid="subscribe-success" className="text-brand-green font-bold text-lg">
                Thanks for subscribing!
              </p>
            ) : (
              <form data-testid="newsletter-form" onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="email"
                  data-testid="newsletter-input"
                  placeholder="Your E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 h-14 px-6 bg-white text-text-dark text-sm font-bold rounded-[22px] placeholder:text-text-light"
                />
                <button
                  type="submit"
                  data-testid="newsletter-button"
                  className="w-[160px] h-14 bg-brand-green text-white text-sm font-bold uppercase rounded-[22px] hover:bg-brand-green/90 transition-colors shrink-0"
                >
                  subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
