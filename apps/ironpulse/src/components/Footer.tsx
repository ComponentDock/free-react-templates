import { useState } from 'react'
import {
  componentDockLabel,
  componentDockUrl,
  footerCredit,
  footerNavItems,
  siteName,
  socialItems,
  subscribeButtonLabel,
  subscribeLabel,
  subscribePlaceholder,
  subscribeSuccess,
} from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const submit = (event: React.FormEvent) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer
      id="footer-section"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/id/453/1920/1000)' }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      <div className="relative flex flex-col items-center px-5 pb-10 pt-24 text-center">
        <a
          href="#home-section"
          className="mb-8 flex h-[85px] w-[85px] items-center justify-center bg-white"
          aria-label={`${siteName} — back to top`}
        >
          <span className="flex flex-col items-center justify-center text-[13px] font-black uppercase leading-[1.1] tracking-tight text-black">
            <span>Iron</span>
            <span className="text-brand">Pulse</span>
          </span>
        </a>

        <nav
          className="mb-16 flex flex-wrap justify-center gap-x-9 gap-y-3"
          aria-label="Footer navigation"
        >
          {footerNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[1.5px] text-white transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {subscribed ? (
          <p role="status" className="mb-12 text-[15px] text-white">
            {subscribeSuccess}
          </p>
        ) : (
          <form
            onSubmit={submit}
            className="relative mb-12 w-full max-w-[542px]"
            role="form"
            aria-label="Subscribe to newsletter"
          >
            <input
              type="email"
              required
              aria-label={subscribeLabel}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={subscribePlaceholder}
              className="h-[73px] w-full border-2 border-white bg-transparent px-6 pr-44 italic text-white placeholder-white/60 outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-[73px] w-[192px] bg-brand text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-white hover:text-dark"
            >
              {subscribeButtonLabel}
            </button>
          </form>
        )}

        <div className="mb-10 flex gap-10">
          {socialItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-brand hover:bg-brand"
            >
              <BrandIcon
                name={item.name.toLowerCase() as 'facebook' | 'twitter' | 'pinterest' | 'behance'}
                className="h-4 w-4"
              />
            </a>
          ))}
        </div>

        <p className="text-[13px] text-white/50">
          {footerCredit(new Date().getFullYear())}{' '}
          <a
            href={componentDockUrl}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white/80 underline underline-offset-2 transition-colors hover:text-brand"
          >
            {componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
