import { Mail, Phone } from 'lucide-react'

/** The support line advertised in the dark utility strip. */
export const SUPPORT_PHONE = '+1 415 555 0182'
export const SUPPORT_EMAIL = 'support@skyporthosting.example'

/**
 * The dark #222222 utility strip above the nav: phone and e-mail links in white
 * at the left and a flat azure purchase action at the right (no radius, 12 px
 * uppercase), matching the reference's top bar.
 */
export function UtilityBar() {
  return (
    <div className="bg-dark text-[12px] text-white">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center gap-2 px-5 py-[8px] sm:flex-row sm:justify-between">
        <ul className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-1">
          <li>
            <a
              href={`tel:${SUPPORT_PHONE.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SUPPORT_PHONE}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {SUPPORT_EMAIL}
            </a>
          </li>
        </ul>

        <a
          href="#plan"
          className="bg-brand px-[26px] py-[9px] text-[12px] font-medium text-white uppercase transition-colors hover:bg-brand-deep"
        >
          Get Skyport
        </a>
      </div>
    </div>
  )
}
