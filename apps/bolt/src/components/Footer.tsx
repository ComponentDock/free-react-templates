import { Mail, MapPin, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export const socialLinks: ReadonlyArray<{ label: string; href: string }> = [
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
]

function SocialIcon({ name }: { name: string }) {
  if (name === 'Pinterest') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.31-.09-.79-.17-2.01.03-2.87.19-.78 1.2-5.07 1.2-5.07s-.3-.61-.3-1.51c0-1.41.82-2.47 1.84-2.47.87 0 1.29.65 1.29 1.43 0 .87-.56 2.17-.84 3.38-.24 1.01.51 1.83 1.5 1.83 1.8 0 3.19-1.9 3.19-4.64 0-2.43-1.74-4.13-4.24-4.13-2.89 0-4.58 2.17-4.58 4.4 0 .87.34 1.81.76 2.32.08.1.09.19.07.29-.08.32-.25 1.03-.28 1.17-.04.19-.15.23-.34.14-1.26-.59-2.05-2.43-2.05-3.92 0-3.19 2.32-6.12 6.68-6.12 3.51 0 6.23 2.5 6.23 5.84 0 3.49-2.2 6.3-5.25 6.3-1.03 0-1.99-.53-2.32-1.16l-.63 2.4c-.23.88-.84 1.98-1.25 2.65.94.29 1.94.45 2.97.45 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    )
  }
  if (name === 'Facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47H15.2c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22c4.78-.76 8.43-4.92 8.43-9.94z" />
      </svg>
    )
  }
  if (name === 'Twitter') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.58-.7-.02-1.36-.21-1.94-.53v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.27 0-.54-.03-.8-.08.54 1.69 2.12 2.93 3.99 2.97-1.46 1.15-3.31 1.83-5.31 1.83-.34 0-.69-.02-1.02-.06 1.9 1.22 4.16 1.93 6.58 1.93 7.89 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.61 5.34a8.03 8.03 0 0 1 1.64 4.83c-2.32-.99-4.79-1.53-7.35-1.53-.76 0-1.51.04-2.25.11-.2-.45-.32-.93-.37-1.44 1.02-.08 2.06-.12 3.11-.12 2.25 0 4.47.37 6.57 1.09l-.35-2.94zM5.57 7.4c.36-1.04.88-2 1.53-2.86l2.21 2.21c-.74.02-1.49.07-2.23.14l-1.51.51zm-.64 2.86a15.2 15.2 0 0 0-.36 1.75c-.04.46-.06.93-.06 1.4 0 1.48.2 2.92.59 4.27 1.34-.28 2.6-.78 3.75-1.46-1.02-.83-1.9-1.84-2.59-2.97.73-.31 1.42-.69 2.07-1.13l-.94-1.83c-1.22.43-2.35 1-3.39 1.7l-.07-.73zm14.21 9.74c-1.17 1.09-2.59 1.94-4.17 2.5a9.9 9.9 0 0 1-6.9.17 9.9 9.9 0 0 1-1.78-.83c1.34-1.05 2.48-2.32 3.36-3.75a9.3 9.3 0 0 0 3.71.63 9.3 9.3 0 0 0 2.52-.36c.05.7.13 1.39.26 2.05.4.02.8.05 1.2.05.7 0 1.38-.06 2.04-.17l-.64-.83zm2.54-1.83c-1.36.5-2.84.76-4.36.76-.78 0-1.55-.07-2.3-.2-.16-.82-.26-1.65-.3-2.5.4-.24.79-.5 1.16-.78l3.23 1.35-1.65-1.07a8.76 8.76 0 0 1 2.51-1.8c.6 1.43.9 2.98.9 4.57 0 .23-.01.46-.02.69l-1.17-.02z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bolt-6/1600/700)' }}
    >
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-white md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Location</h3>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              1525 Awesome Lane, Los Angeles, CA
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Subscriptions</h3>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              +1 (603) 535-4592
            </p>
            <p className="mt-2 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              +1 (603) 535-4556
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">E-mail</h3>
            <p className="mt-4 flex items-start gap-2 leading-relaxed text-[#b5babc]">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
              Contact@boltfit.com
            </p>
            <p className="mt-2 leading-relaxed text-[#b5babc]">www.boltfit.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Social Media</h3>
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center text-[#d1d1d1] transition-colors hover:text-brand"
                >
                  <SocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-8 text-center text-sm text-[#b5babc] sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Bolt. All rights reserved.</p>
          <p>
            More templates at{' '}
            <ButtonLink
              href="https://www.componentdock.com/"
              className="border-0 px-0 text-sm font-bold text-brand hover:bg-transparent hover:text-primary-400"
            >
              Component Dock
            </ButtonLink>
          </p>
        </div>
      </div>
    </footer>
  )
}
