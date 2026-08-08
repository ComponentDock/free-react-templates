import { useState, type FormEvent } from 'react'
import { Button } from '@free-react-templates/ui'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

const features = ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'] as const

export function Footer() {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEmail('')
  }

  return (
    <footer id="contact" className="bg-coal py-16 text-ink dark:bg-gray-900 dark:text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <h3 className="text-lg font-bold uppercase">About Us</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate dark:text-white/60">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase">Features</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {features.map((feature) => (
              <li key={feature}>
                <a
                  href="#home"
                  className="text-slate transition-colors hover:text-brand-dark dark:text-white/60 dark:hover:text-brand"
                >
                  {feature}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase">Subscribe to Newsletter</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate dark:text-white/60">
            Stay in touch with our latest projects and updates.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 flex">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter Email"
              className="w-full rounded-none border border-slate/30 bg-transparent px-4 py-3 text-sm text-ink placeholder:text-slate/60 focus:border-brand focus:outline-none dark:text-white"
            />
            <Button
              type="submit"
              className="rounded-none bg-brand px-5 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-brand-dark"
            >
              Subscribe
            </Button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-bold uppercase">Follow Us</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate dark:text-white/60">
            Follow our work on social media for behind-the-scenes looks at active projects.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#home"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate/30 text-slate transition-colors hover:bg-brand hover:text-white"
              >
                <BrandIcon name={social.name} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-slate/20 px-4 pt-8 text-center text-xs text-slate sm:flex-row sm:px-6 sm:text-left dark:text-white/50">
        <p>© 2026 Lintel. All rights reserved.</p>
        <p>recreation of ColorLib Marga</p>
      </div>
    </footer>
  )
}
