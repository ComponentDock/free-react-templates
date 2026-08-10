import {
  aboutText,
  copyrightText,
  creditText,
  followHeading,
  footerSocials,
  imgUrl,
  instagramSeeds,
  socialLabels,
} from '../data'
import { BrandIcon } from './BrandIcon'
import { Newsletter } from './Newsletter'

const columnTitle = 'mb-7 font-heading text-base font-semibold text-white'

export function Footer() {
  return (
    <footer className="bg-footer pb-[100px] pt-[150px]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <h3 className={columnTitle}>About Us</h3>
          <p className="max-w-[235px] text-sm leading-6">{aboutText}</p>
        </div>

        <div className="lg:col-span-4">
          <Newsletter />
        </div>

        <div className="lg:col-span-3">
          <h3 className={columnTitle}>Instagram Feed</h3>
          <ul className="flex flex-wrap">
            {instagramSeeds.map((seed) => (
              <li key={seed} className="m-[5px] h-16 w-16 overflow-hidden">
                <img
                  src={imgUrl(seed, 64, 64)}
                  alt="Instagram post"
                  className="h-full w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className={columnTitle}>{followHeading}</h3>
          <div className="flex gap-5">
            {footerSocials.map((social) => (
              <a
                key={social}
                href="#"
                aria-label={socialLabels[social]}
                className="text-white transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <BrandIcon name={social} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-sm">{copyrightText}</p>
        <p className="mt-2 text-sm">{creditText}</p>
      </div>
    </footer>
  )
}
