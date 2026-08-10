import { Cloud } from 'lucide-react'
import { dateLine, locationLine, timeLine, utilitySocials, socialLabels } from '../data'
import { BrandIcon } from './BrandIcon'

/** Thin utility bar: location/weather + date/time left, social icons right. */
export function TopBar() {
  return (
    <div className="border-b border-[#ddd]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 px-4 py-2 text-[13px]">
        <ul className="flex flex-wrap items-center divide-x divide-[#ccc]">
          <li className="flex items-center gap-1.5 pr-4">
            <Cloud className="h-4 w-4" aria-hidden="true" />
            {locationLine}
          </li>
          <li className="px-4">{dateLine}</li>
          <li className="pl-4">{timeLine}</li>
        </ul>
        <ul className="flex items-center gap-4">
          {utilitySocials.map((name) => (
            <li key={name}>
              <a
                href="#"
                aria-label={socialLabels[name]}
                className="text-ash transition-colors hover:text-primary"
              >
                <BrandIcon name={name} className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
