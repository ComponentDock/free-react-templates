import { Menu, X } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { BAR_CTA, BRAND, MENU_LABEL, NAV_LINKS, SIGN_IN, WORDMARK_HREF } from '../data/hero'
import { useMobileMenu } from '../hooks/useMobileMenu'

const NAV_ID = 'site-nav'

const LINK_CLASS =
  'block rounded-lg px-3 py-2 text-[15px] font-medium text-muted transition-colors duration-200 hover:bg-[rgba(91,61,245,.07)] hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent heroMd:p-3 heroMd:text-base'

const CURRENT_LINK_CLASS = 'font-semibold text-ink'

/**
 * The bar: a 28 px tile wordmark, four links, a sign-in and a 40 px primary
 * button. It is in flow and transparent — the ground's bloom shows through it.
 *
 * The reference shares one `__cta` class between this button (40 px / radius 10
 * / 14.5 px) and the hero's (50 px / radius 12 / 16 px), which is how a port
 * ends up with two 40 px buttons. They are two components here.
 */
export function SiteHeader() {
  const { open, toggle, close, headerRef, buttonRef } = useMobileMenu()

  return (
    <header ref={headerRef} className="relative z-[5]">
      <div className="hero-bar-inner">
        <a
          href={WORDMARK_HREF}
          className="inline-flex items-center gap-[10px] text-[19px] font-extrabold tracking-[-.02em] text-ink"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            aria-hidden="true"
            className="text-accent"
          >
            <rect width="28" height="28" rx="8" fill="currentColor" />
            <path
              d="M8 18.5 12 13l3.2 3.4L20 9.5"
              fill="none"
              stroke="#fff"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {BRAND}
        </a>

        <button
          ref={buttonRef}
          type="button"
          aria-controls={NAV_ID}
          aria-expanded={open}
          aria-label={open ? MENU_LABEL.close : MENU_LABEL.open}
          onClick={toggle}
          className="ml-auto hidden h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent heroMd:grid"
        >
          {open ? (
            <X className="h-[22px] w-[22px]" aria-hidden="true" />
          ) : (
            <Menu className="h-[22px] w-[22px]" aria-hidden="true" />
          )}
        </button>

        <nav
          id={NAV_ID}
          aria-label="Main"
          className={cn(
            'flex flex-1 items-center justify-between gap-6',
            'heroMd:absolute heroMd:left-[var(--gutter)] heroMd:right-[var(--gutter)] heroMd:top-[calc(100%-6px)]',
            'heroMd:flex-col heroMd:items-stretch heroMd:gap-2 heroMd:rounded-2xl heroMd:border heroMd:border-line',
            'heroMd:bg-surface heroMd:p-2.5 heroMd:shadow-[0_24px_48px_-20px_rgba(18,18,41,.3)]',
            open ? 'heroMd:flex' : 'heroMd:hidden',
          )}
        >
          <ul className="flex gap-1 heroMd:flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}
                  onClick={close}
                  className={cn(LINK_CLASS, link.current && CURRENT_LINK_CLASS)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 heroMd:border-t heroMd:border-line heroMd:pt-2 heroMd:[&>*]:flex-1 heroMd:[&>*]:justify-center">
            <a
              href={SIGN_IN.href}
              onClick={close}
              className="rounded-lg px-3 py-2 text-[15px] font-semibold text-ink transition-colors duration-200 hover:text-accent focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent heroMd:text-center"
            >
              {SIGN_IN.label}
            </a>
            <ButtonLink
              href={BAR_CTA.href}
              onClick={close}
              className="min-h-10 rounded-[10px] bg-accent px-4 text-[14.5px] font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_24px_-10px_rgba(91,61,245,.7)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-accent-hover focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent heroMd:justify-center"
            >
              {BAR_CTA.label}
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
