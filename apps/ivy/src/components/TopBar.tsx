import { Mail, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { CONTACT_EMAIL, CONTACT_PHONE } from '../data'

/**
 * TopBar — white strip above the navbar: "Ivy. University" wordmark left
 * (navy with an orange accent), contact toppers with orange icons, and
 * an orange "Apply now" button right. Toppers hide on small screens.
 */
export function TopBar() {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#home-section" className="text-xl font-bold text-navy">
          Ivy<span className="text-primary">.</span>{' '}
          <span className="text-primary">University</span>
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
            {CONTACT_EMAIL}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            Call Us: {CONTACT_PHONE}
          </span>
        </div>

        <ButtonLink
          href="#admissions-section"
          className="rounded-xl border-2 border-primary bg-primary px-4 py-2 text-sm text-white hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[0_4px_14px_rgba(253,95,0,0.25)]"
        >
          Apply now
        </ButtonLink>
      </div>
    </div>
  )
}
