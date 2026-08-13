import { useState, type FormEvent } from 'react'
import { Heart } from 'lucide-react'
import { footer } from '../data'

/** Footer (reference `.site-footer`): dark #343a40 band with an about blurb
 *  + newsletter form, two navigation link columns, and a copyright bar with
 *  the Component Dock attribution. */
export function Footer() {
  const [email, setEmail] = useState('')

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-footer pb-8 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="mt-5 leading-relaxed text-white/70">{footer.about}</p>
          <h2 className="mt-8 text-lg font-bold">Newsletter</h2>
          <form onSubmit={onSubmit} className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="h-[55px] w-full bg-white px-4 text-sm text-ink focus:border-coral focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 bg-cherry px-6 text-sm tracking-[0.2rem] text-white uppercase transition-colors hover:bg-red-700"
            >
              Send
            </button>
          </form>
        </div>

        {[0, 1].map((column) => (
          <div key={column}>
            <h2 className="text-lg font-bold">Navigation</h2>
            <ul className="mt-5 space-y-3">
              {footer.navigation.map((link) => (
                <li key={link}>
                  <a href="#home" className="text-white/70 transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 pt-8">
        <p className="text-center text-sm text-white/70">
          Copyright &copy; 2026 All rights reserved | Made with{' '}
          <Heart className="inline h-4 w-4 text-coral" aria-hidden="true" /> at{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline transition-colors hover:text-coral"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
