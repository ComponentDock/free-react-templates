import { Mail, HelpCircle } from 'lucide-react'
import { BrandIcon, type BrandName } from './BrandIcon'

const socials: ReadonlyArray<{ label: string; name: BrandName }> = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'X', name: 'x' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'LinkedIn', name: 'linkedin' },
]

export function TopBar() {
  return (
    <div className="bg-gray-100 py-2 text-sm dark:bg-gray-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2 text-mist">
          <Mail className="h-4 w-4" aria-hidden="true" />
          <a href="mailto:hello@alignwell.com" className="hover:text-brand">
            hello@alignwell.com
          </a>
          <span aria-hidden="true">|</span>
          <HelpCircle className="h-4 w-4" aria-hidden="true" />
          <a href="#contact" className="hover:text-brand">
            Help Desk
          </a>
        </div>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="flex h-7 w-7 items-center justify-center rounded-full text-mist transition-colors hover:bg-brand hover:text-white"
            >
              <BrandIcon name={s.name} className="h-3.5 w-3.5" />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
