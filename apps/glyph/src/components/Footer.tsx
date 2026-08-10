import { Heart } from 'lucide-react'
import {
  footerAboutText,
  footerAboutTitle,
  footerCopyright,
  footerCredit,
  footerFollowTagline,
  footerFollowTitle,
  footerInstagramSeeds,
  footerInstagramTitle,
  footerMadeWith,
  footerNewsletterTagline,
  footerSocials,
  imgUrl,
  newsletterTitle,
} from '../data'
import { BrandIcon } from './BrandIcon'
import { NewsletterForm } from './NewsletterForm'

const footerTitleClasses = 'text-[21px] font-bold text-white'

/** Dark four-column footer: About, Newsletter, Instagram feed, Follow Us. */
export function Footer() {
  return (
    <footer className="bg-footer text-body">
      <div className="mx-auto max-w-6xl px-4 py-[120px] lg:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h3 className={footerTitleClasses}>{footerAboutTitle}</h3>
            <p className="mt-6 text-sm leading-relaxed">{footerAboutText}</p>
          </div>
          <div className="lg:col-span-4">
            <h3 className={footerTitleClasses}>{newsletterTitle}</h3>
            <p className="mt-6 text-sm">{footerNewsletterTagline}</p>
            <div className="mt-6">
              <NewsletterForm variant="footer" />
            </div>
          </div>
          <div className="lg:col-span-3">
            <h3 className={footerTitleClasses}>{footerInstagramTitle}</h3>
            <ul className="mt-6 grid grid-cols-3 gap-1.5">
              {footerInstagramSeeds.map((seed) => (
                <li key={seed}>
                  <img
                    src={imgUrl(seed, 80, 80)}
                    alt=""
                    loading="lazy"
                    className="h-20 w-20 object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className={footerTitleClasses}>{footerFollowTitle}</h3>
            <p className="mt-6 text-sm">{footerFollowTagline}</p>
            <div className="mt-6 flex gap-3">
              {footerSocials.map((social) => (
                <BrandIcon
                  key={social.name}
                  name={social.name}
                  label={social.label}
                  color="muted"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-foot-input">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm sm:flex-row lg:px-6">
          <p>{footerCopyright}</p>
          <p>
            {footerMadeWith} <Heart className="inline h-4 w-4 text-accent" aria-hidden="true" />{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
              className="text-accent transition-colors hover:text-white"
            >
              {footerCredit}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
