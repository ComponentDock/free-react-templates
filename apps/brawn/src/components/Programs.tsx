import { Activity, Flame, Repeat, type LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { BAND_PROGRAMS, type Band } from '../content'
import { useReveal } from '../lib/useReveal'
import { Container } from './ui'

const ICONS: Record<Band['icon'], LucideIcon> = {
  activity: Activity,
  flame: Flame,
  repeat: Repeat,
}

/**
 * The blue three-column band. Cards fade and rise on first scroll, 100 ms
 * apart — and are simply visible when there is no observer or the visitor asked
 * for less motion.
 */
export function Programs() {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section id="programs" aria-label="Programs" className="band bg-brand">
      <Container>
        <div ref={ref} data-revealed={visible} className="grid gap-14 md:grid-cols-3">
          {BAND_PROGRAMS.map((band, index) => {
            const Icon = ICONS[band.icon]
            return (
              <div
                key={band.title}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={cn(
                  'text-center text-white transition-all duration-700 motion-reduce:transition-none',
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                )}
              >
                <Icon aria-hidden="true" className="mx-auto h-12 w-12" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-[20px] leading-[1.5] font-black text-white">
                  {band.title}
                </h3>
                <p className="mt-3 text-[1.05rem] leading-[1.8] text-white">{band.copy}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
