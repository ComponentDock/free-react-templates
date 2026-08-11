import {
  topBarEmail,
  topBarEmailLabel,
  topBarPhone,
  topBarPhoneLabel,
  topBarSocials,
} from '../data'
import { BrandIcons } from './BrandIcons'

export function TopBar() {
  return (
    <div className="bg-light">
      <div className="mx-auto flex h-[42px] max-w-7xl items-center justify-between px-4 sm:px-8">
        <ul className="flex items-center gap-[15px] text-muted">
          {topBarSocials.map((name) => (
            <li key={name} className="flex">
              <BrandIcons names={[name]} />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[30px] text-xs text-muted">
          <a
            href={'tel:' + topBarPhone.replace(/[^\d+]/g, '')}
            aria-label={topBarPhoneLabel}
            className="transition-colors hover:text-brand"
          >
            {topBarPhone}
          </a>
          <a
            href={'mailto:' + topBarEmail}
            aria-label={topBarEmailLabel}
            className="transition-colors hover:text-brand"
          >
            {topBarEmail}
          </a>
        </div>
      </div>
    </div>
  )
}
