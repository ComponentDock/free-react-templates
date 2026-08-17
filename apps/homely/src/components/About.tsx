import { Banknote, Building2, Car, ClipboardCheck, FileCheck, Home } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ABOUT_1, IMAGES, STEPS } from '../data'

interface AboutProps {
  /** Main section id when this is the first about band. */
  id?: string
  variant: 'guide' | 'steps'
}

const GUIDE_ICONS = [Home, Car, Building2]
const STEP_ICONS = [ClipboardCheck, FileCheck, Banknote]

/* Mint about bands: photo plus floating green badge (guide variant) or
   photo on the right (steps variant), heading without underline, and three
   icon rows. */
export function About({ id, variant }: AboutProps) {
  const isGuide = variant === 'guide'
  const rows = isGuide ? ABOUT_1.rows : STEPS.rows
  const icons = isGuide ? GUIDE_ICONS : STEP_ICONS
  const title = isGuide ? ABOUT_1.title : STEPS.title
  const image = isGuide ? IMAGES.about1 : IMAGES.about2
  const imageAlt = isGuide
    ? 'Happy homeowner planning her budget'
    : 'Celebrating a long-awaited goal'

  return (
    <section
      id={id}
      aria-label={title}
      className={cn('bg-mint py-[90px] lg:py-[110px]', isGuide && 'scroll-mt-20')}
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <div className={cn('relative', !isGuide && 'lg:order-2')}>
          <img src={image} alt={imageAlt} loading="lazy" className="w-full object-cover" />
          {isGuide && (
            <div className="absolute -bottom-[50px] right-0 bg-brand p-[63px_47px] text-center text-white lg:right-6">
              <span className="block font-display text-[44px] font-bold leading-none">
                {ABOUT_1.badgeValue}
              </span>
              <span className="mt-2 block text-sm">{ABOUT_1.badgeCaption}</span>
            </div>
          )}
        </div>

        <div className={cn(!isGuide && 'lg:order-1')}>
          <h2 className="mb-8 text-[40px] font-bold leading-[1.3] tracking-[-0.04em]">{title}</h2>
          <div className="flex flex-col gap-6">
            {rows.map((row, index) => {
              const Icon = icons[index]!
              return (
                <div key={row.title} className="flex gap-4">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="mt-1 size-6 shrink-0 text-brand"
                  />
                  <div>
                    <h3 className="font-bold text-ink">{row.title}</h3>
                    <p className="mt-1 leading-[1.6] text-body">{row.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
