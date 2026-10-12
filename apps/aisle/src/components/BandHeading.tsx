import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import {
  bandHeadingClass,
  bandTitleClass,
  bandTitleLightClass,
  ornamentClass,
  ornamentRuleEndClass,
  ornamentRuleStartClass,
  ornamentStarClass,
  ornamentStarLightClass,
} from '../lib/styles'

interface BandHeadingProps {
  title: string
  /** The two photo bands set the same heading in white over their scrim. */
  light?: boolean
}

/**
 * A band's heading and the design's ornament under it: two 60px hairlines flanking a star. The star
 * is the page's only decoration on a white band, so it carries the rose; on a photograph band it
 * goes white. The whole ornament is decorative.
 */
export function BandHeading({ title, light = false }: BandHeadingProps) {
  return (
    <div className={bandHeadingClass}>
      <h2 className={cn(bandTitleClass, light ? bandTitleLightClass : null)}>{title}</h2>
      <span className={ornamentClass} aria-hidden="true">
        <span className={ornamentRuleStartClass} />
        <span className={ornamentRuleEndClass} />
        <Star className={cn(ornamentStarClass, light ? ornamentStarLightClass : null)} />
      </span>
    </div>
  )
}
