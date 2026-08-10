import { BrandIcon } from './BrandIcon'
import { SubscribeForm } from './SubscribeForm'

const socials = [
  { name: 'facebook', label: 'Facebook' },
  { name: 'twitter', label: 'Twitter' },
  { name: 'pinterest', label: 'Pinterest' },
  { name: 'vimeo', label: 'Vimeo' },
  { name: 'instagram', label: 'Instagram' },
  { name: 'google', label: 'Google+' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark transition-colors dark:bg-black">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[2fr_1fr] lg:px-16">
        <div>
          <a
            href="#home"
            className="font-display text-xl font-bold uppercase tracking-[0.075em] text-white"
          >
            dispatch
          </a>
          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
                >
                  <BrandIcon name={social.name} className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display text-xs font-medium text-white/10">
            Copyright © {year} All rights reserved | This template is made with ♥ by Free React
            Templates
          </p>
        </div>
        <div className="rounded-md bg-ink p-8 dark:bg-gray-900">
          <h2 className="mb-4 font-display text-lg font-bold text-white">Subscribe</h2>
          <p className="mb-6 font-display text-sm font-medium text-white/40">
            Get the latest dispatches straight to your inbox.
          </p>
          <SubscribeForm />
        </div>
      </div>
    </footer>
  )
}
