import { Mail, MapPin, Phone } from 'lucide-react'
import {
  address,
  copyright,
  credit,
  email,
  footerBlurb,
  informationLinks,
  latestNews,
  phone,
  questionsTitle,
  siteName,
} from '../data'
import { SocialIcons } from './SocialIcons'

export function Footer() {
  return (
    <footer className="bg-cocoa text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="text-xl text-white">
            <a href="#top">{siteName}.</a>
          </h2>
          <p className="mt-4 leading-relaxed">{footerBlurb}</p>
          <div className="[&_a]:text-white/60 [&_a:hover]:text-brand">
            <SocialIcons />
          </div>
        </div>
        <div>
          <h2 className="text-xl text-white">latest News</h2>
          <ul className="mt-6 space-y-5">
            {latestNews.map((item) => (
              <li key={item.headline}>
                <a
                  href="#top"
                  className="font-medium leading-snug text-white/80 transition-colors hover:text-brand"
                >
                  {item.headline}
                </a>
                <p className="mt-1 text-sm text-white/40">{item.meta}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white">Information</h2>
          <ul className="mt-6 space-y-3">
            {informationLinks.map((link) => (
              <li key={link}>
                <a href="#top" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white">{questionsTitle}</h2>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <span>{address}</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <a href="tel:+23923929210" className="transition-colors hover:text-brand">
                {phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-brand" />
              <a href={`mailto:${email}`} className="transition-colors hover:text-brand">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/40">
        {copyright} | {credit}
      </div>
    </footer>
  )
}
