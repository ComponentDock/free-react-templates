import { useRef } from 'react'
import { Cake, Heart, Images, Wine, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { COUNTERS, COUNTER_PHOTO, type Counter } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import { useCountUp } from '../lib/use-count-up'
import { useInView } from '../lib/use-in-view'
import {
  containerClass,
  counterBandClass,
  counterGridClass,
  counterIconClass,
  counterItemClass,
  counterLabelClass,
  counterNumberClass,
  counterPhotoClass,
  counterScrimClass,
} from '../lib/styles'

const ICONS: Record<Counter['icon'], LucideIcon> = {
  photos: Images,
  couples: Heart,
  toasts: Wine,
  cakes: Cake,
}

interface CounterItemProps {
  item: Counter
  reduced: boolean
}

/** One figure: the glyph, the number that rolls up once the band arrives, and its label. */
function CounterItem({ item, reduced }: CounterItemProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const shown = useCountUp(item.value, inView, reduced)
  const Icon = ICONS[item.icon]

  return (
    <div ref={ref} className={counterItemClass}>
      <Icon className={counterIconClass} aria-hidden="true" />
      <h2 className={counterNumberClass}>{shown}</h2>
      <p className={counterLabelClass}>{item.label}</p>
    </div>
  )
}

/**
 * The photo band the request card rides up over: four figures the design prints, each counting from
 * zero on the first crossing of the viewport — and standing still at its value when the visitor
 * has asked for reduced motion.
 */
export function Counters() {
  const reduced = prefersReducedMotion()

  return (
    <div className={counterBandClass}>
      <img
        className={counterPhotoClass}
        src={COUNTER_PHOTO}
        alt=""
        width={1600}
        height={900}
        loading="lazy"
        aria-hidden="true"
      />
      <span className={counterScrimClass} aria-hidden="true" />

      <div className={cn(containerClass, counterGridClass)}>
        {COUNTERS.map((item) => (
          <CounterItem key={item.label} item={item} reduced={reduced} />
        ))}
      </div>
    </div>
  )
}
