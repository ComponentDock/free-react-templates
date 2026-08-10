import { useId, useState, type FormEvent } from 'react'
import { Heart, Send } from 'lucide-react'
import { Button, cn } from '@free-react-templates/ui'
import {
  brandName,
  creditBrand,
  creditPrefix,
  navLinks,
  newsletterHeading,
  newsletterLabel,
  newsletterPlaceholder,
  newsletterSubmitLabel,
  newsletterSuccess,
  sidebarImg,
} from '../data'

export function SidebarContent() {
  const [subscribed, setSubscribed] = useState(false)
  const inputId = useId()
  const year = new Date().getFullYear()

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <div className="relative flex h-full flex-col overflow-y-auto p-8 pb-10 lg:p-12">
      <img
        src={sidebarImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-brand/60" />

      <div className="relative z-10 flex h-full flex-col">
        <h1 className="mb-4 inline-block font-display text-[62px] leading-[0.8] text-white xl:text-[74px]">
          <a href="#top" className="focus-visible:outline-none focus-visible:underline">
            {brandName}
          </a>
        </h1>

        <nav aria-label="Main">
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#top"
                  aria-current={link === 'Home' ? 'page' : undefined}
                  className={cn(
                    'relative block py-2.5 text-lg font-medium text-white',
                    'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full',
                    'after:origin-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300',
                    'hover:after:scale-x-100 focus-visible:after:scale-x-100 focus-visible:outline-none',
                    link === 'Home' && 'font-semibold after:scale-x-100',
                  )}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto pt-8 text-[17px] text-white/70">
          <h2 className="mb-4 text-[17px] font-normal text-white">{newsletterHeading}</h2>
          {subscribed ? (
            <p role="status" className="text-white/80">
              {newsletterSuccess}
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="relative">
              <label htmlFor={inputId} className="sr-only">
                {newsletterLabel}
              </label>
              <input
                id={inputId}
                type="email"
                required
                placeholder={newsletterPlaceholder}
                className="h-[52px] w-full border border-white/20 bg-transparent pr-12 text-sm text-white/80 placeholder:text-white/40 focus:border-white/60 focus:outline-none"
              />
              <Button
                type="submit"
                size="sm"
                aria-label={newsletterSubmitLabel}
                className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-none bg-transparent px-0 text-white/80 hover:bg-white/10 hover:text-white focus-visible:ring-white/40"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </form>
          )}
          <p className="mt-6 text-white/70">
            Copyright © {year} {creditPrefix}{' '}
            <Heart className="inline h-3 w-3 fill-current" aria-hidden="true" /> by {creditBrand}
          </p>
        </div>
      </div>
    </div>
  )
}
