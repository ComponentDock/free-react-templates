import { brand, footer } from '../data'
import { BrandIcon } from './BrandIcon'

const socialLabels: Record<(typeof footer.socials)[number], string> = {
  facebook: 'Facebook',
  twitter: 'Twitter',
  linkedin: 'LinkedIn',
  dribbble: 'Dribbble',
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white pt-16 pb-10 text-center">
      <div className="mx-auto max-w-7xl px-6">
        <ul className="flex justify-center gap-4">
          {footer.socials.map((social) => (
            <li key={social}>
              <a
                href="#home"
                aria-label={socialLabels[social]}
                className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-light text-ink transition-colors hover:bg-brand hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <BrandIcon name={social} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-muted">
          © {year} {brand}. {footer.credit}.
        </p>
        <p className="mt-2 text-sm text-muted">
          {footer.madeWith} ·{' '}
          <a
            href={footer.componentDockHref}
            className="font-medium text-brand transition-colors hover:text-brand-pink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            {footer.componentDockLabel}
          </a>
        </p>
      </div>
    </footer>
  )
}
