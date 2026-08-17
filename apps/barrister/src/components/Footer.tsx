import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { z } from 'zod'
import {
  BRAND,
  FOOTER_ABOUT,
  FOOTER_NAV_LEFT,
  FOOTER_NAV_RIGHT,
  RECENT_POSTS,
  SOCIALS,
} from '../data'
import { SOCIAL_ICONS } from './icons'
import { ButtonLink } from '@free-react-templates/ui'

const subscribeSchema = z.object({
  email: z.string().min(1, 'Your email is required').email('Enter a valid email'),
})

type SubscribeValues = z.infer<typeof subscribeSchema>

/* Footer — light background with four widgets: About Us, Navigation (two
   link columns), Follow us (social icons + subscribe form), and Recent
   Posts; copyright bar credits Component Dock. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>(undefined)
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email } satisfies SubscribeValues)
    if (!result.success) {
      // zod guarantees at least one issue on a failed parse
      setError(result.error.issues[0]!.message)
      setSent(false)
      return
    }
    setError(undefined)
    setSent(true)
  }

  return (
    <footer className="bg-white px-4 py-20 text-sm text-black/70">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="border-b border-edge pb-3 font-display text-lg font-bold text-black">
            About Us
          </h3>
          <p className="mt-5 leading-relaxed">{FOOTER_ABOUT}</p>
          <ButtonLink
            href="#home-section"
            className="mt-6 rounded border border-brand px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-brand transition-colors hover:bg-brand hover:text-black"
          >
            Learn more
          </ButtonLink>
        </div>

        <div>
          <h3 className="border-b border-edge pb-3 font-display text-lg font-bold text-black">
            Navigation
          </h3>
          <ul className="mt-5 flex flex-col gap-2">
            {FOOTER_NAV_LEFT.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
            {FOOTER_NAV_RIGHT.map((link) => (
              <li key={`${link.label}-right`}>
                <a href={link.href} className="transition-colors hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="border-b border-edge pb-3 font-display text-lg font-bold text-black">
            Follow us
          </h3>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map(({ key, label }) => {
              const Icon = SOCIAL_ICONS[key]
              return (
                <li key={key}>
                  <a
                    href="#home-section"
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface text-black/60 transition-colors hover:bg-brand hover:text-black"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="mt-7">
            <h3 className="border-b border-edge pb-3 font-display text-lg font-bold text-black">
              Subscribe
            </h3>
            <form onSubmit={handleSubmit} noValidate className="mt-5 flex">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (error) setError(undefined)
                }}
                aria-invalid={error ? true : undefined}
                placeholder="Enter your email"
                className="h-[42px] w-full border-2 border-black/20 bg-transparent px-3 text-black outline-none transition-colors placeholder:text-black/40 focus:border-brand"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-[42px] w-[42px] shrink-0 items-center justify-center bg-black text-white transition-colors hover:bg-brand"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            {error && (
              <p role="alert" className="mt-2 text-xs text-red-600">
                {error}
              </p>
            )}
            {sent && (
              <p role="status" className="mt-2 text-xs text-green-700">
                Thanks! You are subscribed.
              </p>
            )}
          </div>
        </div>

        <div>
          <h3 className="border-b border-edge pb-3 font-display text-lg font-bold text-black">
            Recent Posts
          </h3>
          <ul className="mt-5 flex flex-col gap-4">
            {RECENT_POSTS.map((post) => (
              <li key={post.title}>
                <span className="block text-xs text-black/50">{post.date}</span>
                <a href="#home-section" className="transition-colors hover:text-brand">
                  {post.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-6xl border-t border-edge pt-8 text-center text-xs text-black/60">
        <p>
          <a href="#home-section" className="font-display text-sm font-bold text-brand">
            {BRAND}.
          </a>{' '}
          Copyright &copy;{new Date().getFullYear()} All rights reserved | Made with ❤ — more
          templates at{' '}
          <a href="https://www.componentdock.com/" className="text-brand">
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}