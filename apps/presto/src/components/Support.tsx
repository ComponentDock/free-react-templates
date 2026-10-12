import { MessageSquare, PhoneCall } from 'lucide-react'

/** The support line and chat entry point offered beside the caption. */
const SUPPORT_PHONE = '+1 415 555 0182'
const CHAT_HREF = 'mailto:help@prestohosting.example'

/**
 * Dark support band: a two-line title and blurb on the left, with exactly two
 * lilac contact chips (a phone line and a chat action) on the right.
 */
export function Support() {
  return (
    <section
      id="support"
      aria-label="Expert support"
      className="bg-gradient-to-b from-violet-deep to-violet pt-[130px] pb-[130px]"
    >
      <div className="mx-auto max-w-[1140px] px-5">
        <div className="grid items-center gap-12 lg:grid-cols-[5fr_6fr]">
          <div>
            <h2 className="font-heading text-[31px] leading-[1.3] font-semibold text-white md:text-[35px]">
              Around-the-clock expert support
            </h2>
            <p className="mt-4 pr-2 text-base leading-[1.8] text-white/60">
              Every plan includes access to the engineers who run the platform — no ticket queues
              that stall overnight, no upsell to reach a human.
            </p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2">
            <li>
              <a
                href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
                className="flex h-full items-center gap-4 rounded-[10px] bg-lilac px-5 py-[35px] transition-colors hover:bg-brand"
              >
                <PhoneCall aria-hidden="true" className="h-9 w-9 shrink-0 text-white" />
                <span className="font-heading text-xl font-medium text-white">{SUPPORT_PHONE}</span>
              </a>
            </li>
            <li>
              <a
                href={CHAT_HREF}
                className="flex h-full items-center gap-4 rounded-[10px] bg-lilac px-5 py-[35px] transition-colors hover:bg-brand"
              >
                <MessageSquare aria-hidden="true" className="h-9 w-9 shrink-0 text-white" />
                <span className="font-heading text-xl font-medium text-white">
                  Chat with an engineer
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
