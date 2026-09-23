import { useState, type FormEvent } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubscribed(true)
    setEmail('')
  }

  return (
    <section id="contact" className="bg-blue-primary py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 sm:flex-row sm:items-center sm:px-6">
        <h2 className="text-xl font-bold sm:text-2xl">Subscribe For New Updates</h2>

        {subscribed ? (
          <p
            role="status"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-blue-primary"
          >
            Thanks for subscribing — see you in your inbox!
          </p>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-1 gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="flex-1 rounded-full border border-white/40 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none sm:max-w-md"
            />
            <Button
              type="submit"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-primary hover:bg-white/90"
            >
              Subscribe <ArrowRight className="ml-1 inline h-4 w-4" />
            </Button>
            {error && (
              <p role="alert" className="mt-2 w-full text-sm font-medium text-white">
                {error}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  )
}
