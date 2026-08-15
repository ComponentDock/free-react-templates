import { storyBackdrop, storyImage, storyLabel, storyParagraphs, storyTitle } from '../data'
import { SectionHeading } from './SectionHeading'

export function Story() {
  return (
    <section id="about-section" aria-label={storyTitle} className="bg-white px-6 py-14 lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2">
        <div>
          <SectionHeading
            backdrop={storyBackdrop}
            label={storyLabel}
            title={storyTitle}
            align="left"
          />
          {storyParagraphs.map((paragraph, index) => (
            <p key={index} className="mb-4 leading-[1.7] text-body">
              {paragraph}
            </p>
          ))}
        </div>
        <img src={storyImage} alt="" className="w-full" />
      </div>
    </section>
  )
}
