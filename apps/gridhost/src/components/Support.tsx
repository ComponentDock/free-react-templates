import { MessageSquare, Phone } from 'lucide-react'
import { CONTACT } from '../lib/site'
import { SectionTitle } from './SectionTitle'

const PHOTO = 'https://picsum.photos/seed/gridhost-support/1600/900'

/**
 * The support band: a dark photo under a navy wash with a copy block (pink
 * eyebrow, the `support-heading` grey at 50px and white body copy) beside two
 * brand-pink 165×136 cards, each a 50px `medallion` circle over a 16px bold
 * label — one a phone link, one a text action.
 */
export function Support() {
  return (
    <section id="contact" aria-label="Support" className="relative bg-navy">
      <img
        src={PHOTO}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-navy/90" />

      <div className="relative mx-auto w-full max-w-[1140px] px-[15px] py-[70px] min-[992px]:py-[150px]">
        <div className="flex flex-wrap items-center justify-between gap-y-[40px]">
          <div className="w-full lg:w-5/12">
            <SectionTitle
              eyebrow="Talk to a human"
              title="An engineer, not a ticket queue"
              align="left"
              tone="support"
              className="mb-[10px]"
            />
            <p className="py-[30px] pr-[10px] text-[16px] leading-[1.8] text-white">
              Weekday or weekend, someone who can read your logs is on the other end. Average first
              reply over the last quarter: four hours.
            </p>
          </div>

          <div className="flex w-full flex-wrap justify-center lg:w-6/12 lg:justify-end">
            <a
              href={CONTACT.telHref}
              aria-label={`Call support on ${CONTACT.phone}`}
              className="mx-[15px] flex h-[136px] w-[165px] flex-col items-center justify-center rounded-tile bg-brand text-center transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="mb-[16px] grid h-[50px] w-[50px] place-items-center rounded-full bg-medallion text-white">
                <Phone aria-hidden="true" className="h-[22px] w-[22px]" />
              </span>
              <span className="font-heading text-[16px] font-bold text-white">{CONTACT.phone}</span>
            </a>

            <a
              href="#domains"
              className="mx-[15px] flex h-[136px] w-[165px] flex-col items-center justify-center rounded-tile bg-brand text-center transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="mb-[16px] grid h-[50px] w-[50px] place-items-center rounded-full bg-medallion text-white">
                <MessageSquare aria-hidden="true" className="h-[22px] w-[22px]" />
              </span>
              <span className="font-heading text-[16px] font-bold text-white">Chat by text</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
