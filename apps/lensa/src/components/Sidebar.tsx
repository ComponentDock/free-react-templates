import { ArrowRight, MapPin } from 'lucide-react'
import { aboutText, contactInfo, portfolioHref } from '../data'

/** Fixed white left sidebar: brand wordmark + subtitle, serif intro headline,
 *  paragraph, contact details (MapPin on the address line) and an outlined
 *  uppercase "see my portfolio" CTA with a right arrow. */
export function Sidebar() {
  return (
    <aside className="relative z-30 w-full bg-paper lg:fixed lg:inset-y-0 lg:left-0 lg:w-[614px]">
      <div className="px-[45px] pb-16 pt-[130px] md:px-[95px] lg:px-[145px] lg:pt-[151px]">
        <a href="#home" className="mb-[80px] block">
          <h2 className="text-[70px] font-normal uppercase leading-[100px] tracking-[18px] text-ink lg:text-[100px]">
            Lensa
          </h2>
          <p className="pl-[10px] text-[12px] uppercase tracking-[12px] text-muted">
            Photography Studio
          </p>
        </a>

        <div className="mb-[80px]">
          <h1 className="font-display mb-[40px] text-[40px] font-black leading-[1.1] text-ink lg:text-[48px]">
            My name is Michael Smith.
          </h1>
          <p className="text-[13px] leading-[2] text-ink">{aboutText}</p>
        </div>

        <ul className="mb-[65px] space-y-[5px] text-[14px] text-muted">
          <li className="flex items-start gap-[10px]">
            <MapPin className="mt-[3px] h-4 w-4 shrink-0 text-ink" aria-hidden="true" />
            <span>{contactInfo.address}</span>
          </li>
          <li className="pl-[26px]">{contactInfo.phone}</li>
          <li className="pl-[26px]">
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-ink transition-opacity hover:opacity-70"
            >
              {contactInfo.email}
            </a>
          </li>
        </ul>

        <a
          href={portfolioHref}
          className="inline-flex min-w-[167px] items-center justify-center gap-[15px] border-2 border-line px-[35px] py-[19px] text-center text-[14px] font-bold uppercase leading-none text-ink transition-colors hover:border-ink"
        >
          see my portfolio
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
