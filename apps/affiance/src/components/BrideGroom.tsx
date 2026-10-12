import { cn } from '@free-react-templates/ui'
import { PORTRAITS, photo, SECTION_IDS } from '../lib/site'
import {
  containerClass,
  markCornerClass,
  portraitBlurbClass,
  portraitMarkClass,
  portraitNameClass,
  portraitPhotoClass,
  portraitRowClass,
  portraitRowReverseClass,
  portraitRowSpacingClass,
  portraitTextClass,
  sectionClass,
} from '../lib/styles'
import { DovesMark } from './DovesMark'
import { SectionHeading } from './SectionHeading'

/**
 * About bride & groom: two alternating rows — a 400px photograph in the design's 15px pale frame
 * beside a text column, each column carrying the theme's 100px two-doves watermark pinned to its
 * bottom edge.
 */
export function BrideGroom() {
  return (
    <section id={SECTION_IDS.groomBride} className={cn(sectionClass, 'bg-white')} aria-label="Bride and groom">
      <div className={containerClass}>
        <SectionHeading subheading="About Bride & Groom" title="Bride & Groom" />
        <div>
          {PORTRAITS.map((row) => (
            <div
              key={row.key}
              data-testid={`portrait-${row.key}`}
              className={cn(
                portraitRowClass,
                portraitRowSpacingClass,
                row.photoSide === 'right' && portraitRowReverseClass,
              )}
            >
              <img className={portraitPhotoClass} src={photo(row.photo, 800, 800)} alt={row.alt} />
              <div className={portraitTextClass(row.mark)}>
                <DovesMark className={cn(portraitMarkClass, markCornerClass(row.mark))} />
                <h2 className={portraitNameClass}>{row.name}</h2>
                <p className={portraitBlurbClass}>{row.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
