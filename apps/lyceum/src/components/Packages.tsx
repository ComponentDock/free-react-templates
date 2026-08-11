import { Gem, GraduationCap } from 'lucide-react'
import {
  coursePackages,
  joinNowLabel,
  packagesHeading,
  packagesLabel,
  packagesParagraph,
  type CoursePackage,
} from '../data'
import { cn } from '@free-react-templates/ui'

const iconMap = {
  graduation: GraduationCap,
  gem: Gem,
} as const

export function Packages() {
  return (
    <section aria-label={packagesLabel} className="bg-light py-[120px]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-3">
          <div className="lg:pr-6">
            <h2 className="mb-5 font-heading text-4xl text-ink">{packagesHeading}</h2>
            <p className="text-sm leading-6 text-muted">{packagesParagraph}</p>
          </div>

          {coursePackages.map((pkg: CoursePackage) => {
            const Icon = iconMap[pkg.icon]
            return (
              <div
                key={pkg.title}
                className="group rounded-[5px] bg-white px-[55px] py-[30px] text-center"
              >
                <div className="mx-auto mb-[25px] flex h-[140px] w-[140px] items-center justify-center rounded-full bg-pack-chip transition-colors duration-300 group-hover:bg-brand">
                  <Icon
                    aria-hidden="true"
                    className="h-9 w-9 text-ink transition-colors duration-300 group-hover:text-white"
                  />
                </div>
                <h3 className="mb-3 text-2xl text-ink">{pkg.title}</h3>
                <p className="mb-[25px] text-sm text-muted">{pkg.tagline}</p>
                <ul>
                  {pkg.features.map((feature, index) => (
                    <li
                      key={feature}
                      className={cn(
                        'border-b border-border-soft py-[13px] text-sm text-muted',
                        index === 0 && 'border-t',
                      )}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="relative">
                  <p className="mt-10 text-[30px] font-normal text-ink transition-opacity duration-300 group-hover:opacity-0">
                    {pkg.price}
                  </p>
                  <a
                    href="#"
                    className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap border border-brand bg-brand px-[35px] text-[13px] font-medium leading-[48px] text-white opacity-0 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-opacity duration-300 group-hover:opacity-100"
                  >
                    {joinNowLabel}
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
