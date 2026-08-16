import { ButtonLink } from '@free-react-templates/ui'
import { brand, footer } from '../data'
import { BrandIcon } from './BrandIcon'

const socialLabels: Record<(typeof footer.socials)[number], string> = {
  facebook: 'Facebook',
  linkedin: 'LinkedIn',
  instagram: 'Instagram',
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-cream pt-[120px]">
      <div className="mx-auto max-w-[1320px] px-6">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-[620px]">
            <h2 className="font-display text-[32px] font-bold leading-tight tracking-[-0.05em] text-ink sm:text-[50px]">
              {footer.headline}
            </h2>
            <ul className="mt-[45px] flex gap-2">
              {footer.socials.map((social) => (
                <li key={social}>
                  <a
                    href={footer.componentDockHref}
                    aria-label={socialLabels[social]}
                    className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-white hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <BrandIcon name={social} className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:text-right">
            <ButtonLink
              href="#contact"
              className="inline-flex bg-accent px-[60px] py-[30px] text-xl text-white hover:bg-accent/90 sm:px-[102px] sm:py-[42px] sm:text-2xl"
            >
              {footer.ctaLabel}
            </ButtonLink>
            <nav aria-label="Footer navigation" className="mt-[40px]">
              <ul className="flex flex-wrap gap-6">
                {footer.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-lg text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className="mt-[60px] border-t border-ink/20 pt-[18px] pb-[30px]">
          <p className="text-center text-base text-ink">
            Copyright © {year} {brand}. {footer.copyright} | {footer.madeWith}{' '}
            <a
              href={footer.componentDockHref}
              className="font-medium text-accent transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {footer.componentDockLabel}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
