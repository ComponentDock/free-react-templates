import type { ReactNode } from 'react'
import { PARTNERS } from '../lib/site'
import { SectionTitle } from './SectionTitle'

/** Six brandless marks, drawn one per grid position. */
function mark(index: number): ReactNode {
  switch (index) {
    case 0:
      return (
        <>
          <circle cx="22" cy="22" r="14" />
          <path d="M42 30 54 12l12 18" />
          <path d="M78 22h34" strokeLinecap="round" />
        </>
      )
    case 1:
      return (
        <>
          <path d="M24 10l14 24H10z" />
          <path d="M52 34V12l16 22V12" strokeLinecap="round" />
          <rect x="82" y="12" width="20" height="20" />
        </>
      )
    case 2:
      return (
        <>
          <path d="M22 34a12 12 0 1 1 12-12" strokeLinecap="round" />
          <path d="M48 12v22h22" strokeLinecap="round" />
          <path d="M84 34 94 12l10 22" />
        </>
      )
    case 3:
      return (
        <>
          <path d="M12 22h18M30 12v20" strokeLinecap="round" />
          <path d="M52 12h18v20H52z" />
          <path d="M84 12l16 10-16 10" strokeLinecap="round" />
        </>
      )
    case 4:
      return (
        <>
          <rect x="10" y="10" width="24" height="24" rx="12" />
          <rect x="48" y="10" width="24" height="24" />
          <path d="M84 34V12a10 10 0 0 1 20 22" strokeLinecap="round" />
        </>
      )
    default:
      return (
        <>
          <path d="M10 32 22 12l12 20" />
          <path d="M46 32 58 12l12 20" />
          <path d="M94 12v20h14" strokeLinecap="round" />
        </>
      )
  }
}

function PartnerMark({ name, index }: { name: string; index: number }) {
  return (
    <svg
      role="img"
      aria-label={`${name} logo`}
      viewBox="0 0 132 44"
      className="h-[44px] w-[132px] text-navy-heading opacity-55 transition-opacity duration-300 group-hover:opacity-100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {mark(index)}
    </svg>
  )
}

/**
 * The partner band: a plain white strip pairing a short title column with a
 * three-by-two grid of six own abstract marks, each given an explicit 132×44 box
 * and a muted treatment that brightens on hover.
 */
export function PartnerLogos() {
  return (
    <section aria-label="Partner network" className="bg-surface py-[60px]">
      <div className="mx-auto flex w-full max-w-[1140px] flex-wrap items-center px-[15px]">
        <div className="w-full pb-[30px] lg:w-5/12 lg:pb-0">
          <SectionTitle
            eyebrow="Our network"
            title="Built on networks we trust"
            align="left"
            size="md"
          />
        </div>

        <div className="w-full lg:w-7/12">
          <ul className="flex flex-wrap items-center">
            {PARTNERS.map((partner, index) => (
              <li
                key={partner}
                className="group grid w-1/2 place-items-center py-[14px] sm:w-1/2 md:w-1/3"
              >
                <PartnerMark name={partner} index={index} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
