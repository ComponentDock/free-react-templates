import { Mail, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function TopBar() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="text-xl font-bold text-navy">
          Guideway<span className="text-brand">.</span>
        </a>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          <div className="flex items-center gap-2 text-sm text-mist">
            <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>youremail@email.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-mist">
            <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
            <span>Call Us: +1 235 2355 98</span>
          </div>
        </div>

        <ButtonLink
          href="#contact"
          className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Free Consulting
        </ButtonLink>
      </div>
    </div>
  )
}
