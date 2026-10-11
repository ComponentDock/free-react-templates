import { type FormEvent } from 'react'
import { ArrowRight, Heart } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PILL_SQUARE } from '../lib/buttonStyles'
import { BehanceMark, DribbbleMark, FacebookMark, TwitterMark } from './BrandIcons'

const INSTA = [1, 2, 3, 4, 5, 6, 7, 8] as const

const SOCIALS = [
  { label: 'Facebook', Mark: FacebookMark },
  { label: 'Twitter', Mark: TwitterMark },
  { label: 'Dribbble', Mark: DribbbleMark },
  { label: 'Behance', Mark: BehanceMark },
] as const

function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault()
}

/* Dark footer: four widgets on a #222222 ground plus a centered bottom line
   whose heart and link are aqua. The credit points at Component Dock. */
export function Footer() {
  return (
    <footer className="bg-foot pt-[100px] text-body">
      <div className="mx-auto max-w-[1170px] px-4">
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-[25px] text-[18px] font-semibold text-white">About Us</h6>
            <p className="leading-[1.7]">
              Wanderport plans the whole journey — flights, stays and transfers — and stays on the
              other end of the line while you travel.
            </p>
          </div>

          <div>
            <h6 className="mb-[25px] text-[18px] font-semibold text-white">Newsletter</h6>
            <p className="mb-[15px]">Stay update with our latest</p>
            <form
              aria-label="Newsletter"
              noValidate
              onSubmit={handleSubmit}
              className="flex items-stretch"
            >
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                placeholder="Enter Email"
                className="h-[38px] w-full border-none bg-field pl-[20px] text-[13px] font-light text-body focus:outline-none"
              />
              <button type="submit" aria-label="Subscribe" className={cn(PILL_SQUARE, 'flex')}>
                <ArrowRight className="h-[14px] w-[14px]" aria-hidden="true" />
              </button>
            </form>
          </div>

          <div>
            <h6 className="mb-[20px] text-[18px] font-semibold text-white">Instragram Feed</h6>
            <ul className="grid grid-cols-4 gap-[10px]">
              {INSTA.map((index) => (
                <li key={index}>
                  <img
                    src={`https://picsum.photos/seed/wanderport-insta-${index}/120/120`}
                    alt=""
                    loading="lazy"
                    className="block w-full"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h6 className="mb-[25px] text-[18px] font-semibold text-white">Follow Us</h6>
            <p className="mb-[15px]">Let us be social</p>
            <ul className="flex items-center">
              {SOCIALS.map(({ label, Mark }) => (
                <li key={label}>
                  <a
                    href="#contact"
                    aria-label={label}
                    className="group inline-flex pr-[25px] text-[#cccccc] transition-colors duration-300 hover:text-white"
                  >
                    <Mark className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-text flex flex-wrap items-center justify-center pt-[80px] pb-[40px]">
          <p className="text-center">
            Copyright © All rights reserved | This template is made with{' '}
            <Heart className="inline h-[14px] w-[14px] text-aqua" aria-hidden="true" /> by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aqua transition-colors duration-300 hover:text-white"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
