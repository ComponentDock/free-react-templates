import { useState, type FormEvent } from 'react'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

const quickLinks = ['Home', 'About', 'Services', 'Contact'] as const

const instafeed = [
  'brushwork-insta-1',
  'brushwork-insta-2',
  'brushwork-insta-3',
  'brushwork-insta-4',
  'brushwork-insta-5',
  'brushwork-insta-6',
] as const

export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email.trim())) {
      setError('A valid email address is required.')
      return
    }
    setError('')
    setSubscribed(true)
  }

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="text-xl font-bold">
              Brush<span className="text-brand">work</span>
            </a>
            <p className="mt-5 text-sm leading-relaxed text-gray-400">
              We are a creative agency specializing in art, crafting, and digital design. Our
              passion is bringing ideas to life through innovative visual solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">About Agency</h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold uppercase tracking-wide text-brand">Newsletter</h3>
            <p className="mt-5 text-sm text-gray-400">Subscribe to get latest updates</p>
            {subscribed ? (
              <p className="mt-4 rounded-lg border border-brand/40 bg-brand/10 px-4 py-3 text-sm text-brand">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="mt-4">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Email Address
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    aria-invalid={Boolean(error)}
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
                  />
                  <button
                    type="submit"
                    className="shrink-0 rounded-lg bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
                  >
                    Subscribe
                  </button>
                </div>
                {error ? (
                  <p role="alert" className="mt-2 text-sm text-red-400">
                    {error}
                  </p>
                ) : null}
              </form>
            )}

            <h3 className="mt-8 text-lg font-bold uppercase tracking-wide text-brand">Instafeed</h3>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {instafeed.map((seed) => (
                <a key={seed} href="#instafeed" onClick={(e) => e.preventDefault()}>
                  <img
                    src={`https://picsum.photos/seed/${seed}/150/150`}
                    alt="Instagram post"
                    className="h-full w-full rounded-lg object-cover transition-opacity hover:opacity-75"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-5 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Brushwork. All rights reserved. · More templates at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline-offset-4 transition-colors hover:text-brand hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
