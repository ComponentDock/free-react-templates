import { SectionTitle } from './SectionTitle'
import { PillLink } from './Pill'

const PHOTO = 'https://picsum.photos/seed/gridhost-story/960/960'

/**
 * The "we're with you" split band: copy at `padding-left:19%` with a 44px navy
 * heading, two paragraphs and a pill action, beside an illustration on the other
 * half. The halves stack below `lg`.
 */
export function StoryBand() {
  return (
    <section id="about" aria-label="About Gridhost" className="flex flex-wrap items-center py-[70px] min-[768px]:py-[100px] min-[1200px]:py-[200px]">
      <div className="w-full px-[30px] pb-[60px] min-[992px]:w-1/2 min-[992px]:pb-0 min-[992px]:pl-[10%] min-[1200px]:pl-[19%]">
        <div className="min-[992px]:pr-[60px] min-[1200px]:pr-[117px]">
          <SectionTitle
            eyebrow="Since 2014"
            title="We are on call at every step"
            align="left"
            size="md"
            className="mb-[50px]"
          />

          <div className="pt-[45px] pb-[35px]">
            <p className="text-[16px] leading-[1.8] text-muted">
              A migration does not have to be an outage. Our engineers move your files, mail and DNS
              records onto the grid in a window you choose, then watch the first hour with you.
            </p>
            <p className="mt-[20px] text-[16px] leading-[1.8] text-muted">
              Every plan keeps weekly snapshots, a staging copy you can break without regret, and a
              named contact who picks up the phone.
            </p>
          </div>

          <PillLink href="#pricing">See the plans</PillLink>
        </div>
      </div>

      <div className="w-full px-[15px] min-[992px]:w-1/2">
        <img
          src={PHOTO}
          alt="Engineers working beside a server rack"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  )
}
