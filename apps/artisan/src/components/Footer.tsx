import { footer } from '../data'
import { BrandIcon } from './BrandIcon'

export function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <a href="#home" className="inline-flex items-center gap-3" aria-label="Artisan home">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-brand font-sans text-xl font-bold text-white">
            K
          </span>
          <span className="font-sans text-2xl font-bold tracking-[0.2em] text-ink">Artisan</span>
        </a>
        <h4 className="mt-8 font-sans text-[21px] font-bold text-body">{footer.follow}</h4>
        <div className="mt-6 flex items-center justify-center gap-6">
          {footer.socials.map((social) => (
            <a
              key={social.name}
              href="#home"
              aria-label={social.label}
              className="text-social transition-colors hover:text-brand"
            >
              <BrandIcon
                name={social.name as 'facebook' | 'twitter' | 'dribbble' | 'behance'}
                className="h-9 w-9"
              />
            </a>
          ))}
        </div>
        <p className="mt-14 font-body text-[15px] text-body">
          © {new Date().getFullYear()} All rights reserved ·{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-brand underline-offset-4 hover:underline"
          >
            More templates at Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
