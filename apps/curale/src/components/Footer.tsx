import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { componentDock, footerProducts, instagramFeed } from '../data'
import { isValidEmail } from '../lib/newsletter'
import { socialIcons } from './social-icons'

/** Dark #12151f footer: "top products" link column, a validated
 *  newsletter signup, an Instagram feed grid, and a copyright bar with
 *  white circular social buttons (gradient on hover) plus the mandatory
 *  Component Dock attribution link. */
export function Footer() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      setConfirmed(false)
      return
    }
    setError(null)
    setConfirmed(true)
  }

  return (
    <footer className="bg-footer py-[130px] text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="mb-8 text-[18px] font-bold uppercase text-white">top products</h3>
            <ul className="flex flex-col gap-4">
              {footerProducts.map((product) => (
                <li key={product}>
                  <a href="#" className="capitalize text-white transition-colors hover:text-brand">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-8 text-[18px] font-bold uppercase text-white">newsletter</h3>
            <p className="mb-6 text-[15px] leading-relaxed text-white/70">
              You can trust us. we only send promo offers, not a single.
            </p>
            {confirmed ? (
              <p role="status" className="flex items-center gap-2 text-[14px] text-white">
                <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Your email here"
                    aria-label="Your email here"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      if (error) setError(null)
                    }}
                    className={cn(
                      'w-full rounded-[3px] border-none bg-white px-5 py-2.5 text-[15px] text-ink placeholder:text-body sm:w-[250px]',
                      error && 'ring-2 ring-red-400',
                    )}
                  />
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center px-8 py-3 text-[12px] font-normal uppercase tracking-wide text-white transition-opacity hover:opacity-80 sm:w-[170px]"
                    style={{ background: 'linear-gradient(to right, #244cfd, #15e4fd)' }}
                  >
                    subscribe now
                  </button>
                </div>
                {error && <p className="mt-3 text-[13px] font-medium text-red-300">{error}</p>}
              </form>
            )}
          </div>

          <div>
            <h3 className="mb-8 text-[18px] font-bold uppercase text-white">instagram feed</h3>
            <ul className="grid max-w-[260px] grid-cols-4 gap-1.5">
              {instagramFeed.map((src, index) => (
                <li key={`${src}-${index}`}>
                  <a href="#" aria-label={`Instagram post ${index + 1}`}>
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="h-[55px] w-[55px] object-cover"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[70px] flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[14px] text-white/80">
            © All rights reserved | This template is made with by{' '}
            <a
              href={componentDock}
              className="font-medium text-brand transition-colors hover:opacity-80"
            >
              Component Dock
            </a>{' '}
            — more templates at{' '}
            <a href={componentDock} className="text-brand transition-colors hover:opacity-80">
              componentdock.com
            </a>
          </p>
          <ul className="flex items-center gap-3">
            {socialIcons.map(({ label, Icon }) => (
              <li key={label}>
                <a
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-body transition-all hover:bg-gradient-to-r hover:from-[#244cfd] hover:to-[#15e4fd] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
