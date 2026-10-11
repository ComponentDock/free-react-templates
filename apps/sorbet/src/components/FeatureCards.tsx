import { Heart, Settings, Target } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { KitButton } from './KitButton'

const BLURB =
  'With supporting text below as a natural lead-in to additional content. A small river named Duden flows by their place and supplies it with the necessary regelialia.'

const CARDS = [
  {
    id: 'info',
    Icon: Target,
    badge: 'bg-info text-white',
    color: 'info',
  },
  {
    id: 'success',
    Icon: Settings,
    badge: 'bg-success text-heading',
    color: 'success',
  },
  {
    id: 'warning',
    Icon: Heart,
    badge: 'bg-warning text-heading',
    color: 'warning',
  },
] as const

/**
 * Three white cards straddling the hero's bottom edge: a colored circular icon
 * badge, a card title, a blurb and a matching colored button.
 */
export function FeatureCards() {
  return (
    <section id="features" className="bg-light px-4 pb-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="relative z-10 grid -translate-y-20 gap-8 md:grid-cols-3">
          {CARDS.map(({ id, Icon, badge, color }) => (
            <div key={id} className="rounded bg-white p-8 shadow-card">
              <span
                className={cn(
                  'flex h-14 w-14 -translate-y-14 items-center justify-center rounded-full',
                  badge,
                )}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h5 className="-mt-8 text-[1.25rem] text-heading">Card title treatment</h5>
              <p className="mt-4 mb-8">{BLURB}</p>
              <KitButton color={color} variant="solid" size="md">
                Go somewhere
              </KitButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
