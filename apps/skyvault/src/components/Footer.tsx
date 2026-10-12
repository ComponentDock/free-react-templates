import { ContactForm } from './ContactForm'
import { FooterLinks } from './FooterLinks'
import { Reveal } from './Reveal'
import { Wordmark } from './Wordmark'

/**
 * The deepest-violet footer: the wordmark, the Component Dock credit line, a
 * short blurb and the contact form on the left half, four link columns on the
 * right, stacking below the desktop breakpoint.
 */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="scroll-mt-[124px] bg-plum-deep pt-[95px] pb-[95px]">
      <div className="mx-auto w-full max-w-[1140px] px-5">
        <Reveal className="flex flex-wrap">
          <div className="w-full max-[991px]:mb-[95px] min-[992px]:w-1/2">
            <Wordmark className="text-[47px] leading-none max-[575px]:text-[36px]" />
            <p className="copyright mt-[17px] text-[11px] text-plum-mid">
              © {year} Skyvault — all rights reserved. More templates at{' '}
              <a
                href="https://www.componentdock.com/"
                className="text-mint transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint"
              >
                Component Dock
              </a>
              .
            </p>
            <p className="mt-[33px] text-white">
              Domains, hosting and managed servers from one dashboard, with a support team that
              answers in minutes — day or night.
            </p>
            <ContactForm />
          </div>

          <div className="w-full min-[992px]:w-1/2 min-[992px]:pt-[13px]">
            <FooterLinks />
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
