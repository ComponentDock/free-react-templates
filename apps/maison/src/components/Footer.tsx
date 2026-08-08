import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'LinkedIn', name: 'linkedin' },
  { label: 'Instagram', name: 'instagram' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer className="bg-coal py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div>
          <h3 className="font-display text-lg font-bold uppercase text-white">About Me</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Do you want to be even more successful? Learn to love learning and growth. The more
            effort you put into improving your skills, the bigger the payoff.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-brand hover:bg-brand hover:text-ink"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase text-white">Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Stay updated with our latest projects and design notes.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex gap-2">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              className="w-full rounded-none border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
            />
            <Button
              type="submit"
              className="rounded-none bg-brand px-6 py-3 text-xs font-bold uppercase text-ink transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold uppercase text-white">Follow Me</h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Follow our work on social media for behind-the-scenes looks at active projects.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/10 px-4 pt-8 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left">
        <p>© 2026 Maison. All rights reserved.</p>
        <p>recreation of ColorLib Loaft</p>
      </div>
    </footer>
  )
}
