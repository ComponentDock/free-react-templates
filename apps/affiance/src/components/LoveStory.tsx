import { cn } from '@free-react-templates/ui'
import { MILESTONES, photo, SECTION_IDS } from '../lib/site'
import { prefersReducedMotion } from '../lib/motion'
import { useParallax } from '../lib/use-parallax'
import {
  loveStoryClass,
  loveStoryBodyClass,
  loveStoryPhotoClass,
  loveStoryScrimClass,
  markCornerClass,
  timelineBadgeClass,
  timelineBadgePhotoClass,
  timelineBadgeRingClass,
  timelineBlurbClass,
  timelineClass,
  timelineDateClass,
  timelineItemClass,
  timelineMarkClass,
  timelinePanelBaseClass,
  timelinePanelFrameClass,
  timelinePanelFrameTiltClass,
  timelinePanelLeftClass,
  timelineTitleClass,
} from '../lib/styles'
import { DovesMark } from './DovesMark'
import { SectionHeading } from './SectionHeading'

/**
 * The love story: a fixed photograph band carrying the four milestones as brand-pink cards with the
 * design's double dashed frame, each strayed to one side of a central line while a 120px circular
 * photograph badge sits on it. The photograph drifts at half the scroll rate — and not at all for a
 * visitor who asks for reduced motion.
 */
export function LoveStory() {
  const parallax = useParallax(!prefersReducedMotion())

  return (
    <section id={SECTION_IDS.loveStory} className={loveStoryClass} aria-label="Our story">
      <div
        data-testid="lovestory-photo"
        className={loveStoryPhotoClass}
        style={{ backgroundImage: `url(${photo('affiance-29', 1920, 1200)})`, ...parallax }}
      />
      <div className={loveStoryScrimClass} aria-hidden="true" />
      <div className={loveStoryBodyClass}>
        <SectionHeading subheading="Love Story" title="Timeline of Love" />
        <ol className={timelineClass}>
          {MILESTONES.map((entry) => (
            <li key={entry.title} className={timelineItemClass}>
              <div className={cn(timelinePanelBaseClass, !entry.reverse && timelinePanelLeftClass)}>
                <DovesMark className={cn(timelineMarkClass, markCornerClass(entry.mark))} />
                <span className={timelinePanelFrameClass} aria-hidden="true" />
                <span className={cn(timelinePanelFrameClass, timelinePanelFrameTiltClass)} aria-hidden="true" />
                <p className={timelineDateClass}>{entry.date}</p>
                <h3 className={timelineTitleClass}>{entry.title}</h3>
                <p className={timelineBlurbClass}>{entry.blurb}</p>
              </div>
              <div className={timelineBadgeClass}>
                <span className={timelineBadgeRingClass} aria-hidden="true" />
                <img className={timelineBadgePhotoClass} src={photo(entry.photo, 240, 240)} alt={entry.alt} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
