import { useState } from 'react'
import type { FormEvent } from 'react'
import { ShoppingBag } from 'lucide-react'
import { z } from 'zod'
import { brandName, footerSocials, quickLinks, shopColumns, subscribeCopy } from '../data'
import { SocialIcon } from './social-icons'

const subscribeSchema = z.object({
  email: z.string().email('Please enter a valid email address.'),
})

/* Reference: footer.footer-wrapper (dark #171613) — a subscribe row (white
   heading + copy, email input + red square button, three social icons), five
   link columns (wordmark, Shop Men / Shop Women / Baby Collection / Quick
   Links) and a copyright bar. The bottom bar carries the mandatory
   Component Dock credit link. */
export function Footer() {
  return (
    <footer id="contact" className="bg-footer">
      <div className="mx-auto max-w-[1320px] px-4 pt-[63px]">
        <div className="flex flex-col items-center gap-8 pb-10 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-medium text-white">{subscribeCopy.heading}</h2>
            <p className="mt-1 text-white/80">{subscribeCopy.body}</p>
          </div>
          <SubscribeForm />
          <ul className="flex gap-4">
            {footerSocials.map((name) => (
              <li key={name}>
                <a
                  href={`https://${name.toLowerCase()}.com`}
                  aria-label={name}
                  className="text-footer-link transition-colors hover:text-brand"
                >
                  <SocialIcon name={name} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-10 border-t border-white/15 pt-[60px] pb-[60px] md:grid-cols-2 lg:grid-cols-5">
          <div>
            <a
              href="#home"
              className="flex items-center gap-2 font-heading text-[24px] font-semibold text-white"
            >
              <ShoppingBag className="text-brand" aria-hidden="true" />
              {brandName}
            </a>
          </div>
          {shopColumns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-lg font-medium text-white">{column.heading}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-base text-footer-link transition-colors hover:text-brand"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="text-base text-footer-link transition-colors hover:text-brand"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-footer-link">
        <p>
          © {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline-offset-4 hover:underline"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}

function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = subscribeSchema.safeParse({ email })
    if (!result.success) {
      setError(result.error.issues[0]!.message)
      return
    }
    setError('')
    setDone(true)
  }

  if (done) {
    return (
      <p
        role="status"
        className="w-full max-w-md bg-white px-6 py-[18px] text-center font-heading text-base text-charcoal"
      >
        Thanks for subscribing — your 5% discount is on its way!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-md">
      <div className="flex">
        <label htmlFor="subscribe-email" className="sr-only">
          Email address
        </label>
        <input
          id="subscribe-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-invalid={error ? true : undefined}
          className="h-[60px] w-full bg-white px-6 text-charcoal outline-none placeholder:text-copy/60"
        />
        <button
          type="submit"
          className="h-[60px] shrink-0 bg-brand px-6 font-heading text-base font-medium text-white transition-colors hover:bg-[#d61c1c]"
        >
          Subscribe
        </button>
      </div>
      {error && (
        <p role="alert" className="mt-2 text-sm text-[#ff8a8a]">
          {error}
        </p>
      )}
    </form>
  )
}
