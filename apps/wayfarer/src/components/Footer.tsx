import { Compass } from 'lucide-react'
import {
  brandName,
  companyLinks,
  companyTitle,
  componentDockName,
  componentDockUrl,
  copyrightPrefix,
  destinationLinks,
  destinationsTitle,
  instagramImages,
  instagramTitle,
  madeWithPrefix,
} from '../data'

export function Footer() {
  return (
    <footer id="contact" className="bg-navy pb-10 pt-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <Compass className="h-8 w-8 text-teal" aria-hidden="true" />
              <span className="font-sans text-2xl font-medium text-white">{brandName}</span>
            </a>
          </div>
          <nav aria-label={companyTitle}>
            <h3 className="mb-10 font-sans text-xl text-white">{companyTitle}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#home"
                    className="font-sans text-base capitalize text-white/60 transition-colors hover:text-teal"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={destinationsTitle}>
            <h3 className="mb-10 font-sans text-xl text-white">{destinationsTitle}</h3>
            <ul className="grid grid-cols-2 gap-x-6 space-y-3">
              {destinationLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#destination"
                    className="font-sans text-base capitalize text-white/60 transition-colors hover:text-teal"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="mb-10 font-sans text-xl text-white">{instagramTitle}</h3>
            <ul className="grid grid-cols-3 gap-1.5">
              {instagramImages.map((image, index) => (
                <li key={image}>
                  <img
                    src={image}
                    alt={`Instagram photo ${index + 1}`}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="font-sans text-sm text-white/70">
            {copyrightPrefix} | {madeWithPrefix}{' '}
            <a
              href={componentDockUrl}
              className="font-medium text-white transition-colors hover:text-coral"
            >
              {componentDockName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
