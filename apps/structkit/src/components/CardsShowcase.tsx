import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const SUPPORTING =
  'With supporting text below as a natural lead-in to additional content. A small river named Duden flows by their place and supplies it with the necessary regelialia.'

/** The kit's card catalog: plain, round-image, image and profile cards. */
export function CardsShowcase() {
  return (
    <ShowcaseSection id="cards" title="Cards Styles" className="bg-light">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <SubHeading>
            <small className="text-[18px]">Cards with Image Round</small>
          </SubHeading>
          <article className="rounded border border-black/12 bg-white p-6 text-center shadow-card">
            <img
              src="https://picsum.photos/seed/structkit-card-round/400/400"
              alt="Round card illustration"
              className="mx-auto h-40 w-40 rounded-full object-cover"
            />
            <h5 className={cn('mt-4 text-xl font-normal text-heading')}>Special title treatment</h5>
            <p className="mt-3 text-sm">{SUPPORTING}</p>
            <a href="#cards" className="mt-4 inline-block text-primary hover:underline">
              Go somewhere
            </a>
          </article>
        </div>

        <div>
          <SubHeading>
            <small className="text-[18px]">Cards with image</small>
          </SubHeading>
          <article className="overflow-hidden rounded border border-black/12 bg-white shadow-card">
            <img
              src="https://picsum.photos/seed/structkit-card-image/600/320"
              alt="Card cover"
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h5 className="text-xl font-normal text-heading">Card title</h5>
              <p className="mt-3 text-sm">{SUPPORTING}</p>
            </div>
          </article>
        </div>

        <div>
          <SubHeading>
            <small className="text-[18px]">Cards Profile</small>
          </SubHeading>
          <article className="rounded border border-black/12 bg-white p-6 text-center shadow-card">
            <img
              src="https://picsum.photos/seed/structkit-profile/200/200"
              alt="Profile portrait"
              className="mx-auto h-24 w-24 rounded-full object-cover"
            />
            <h5 className="mt-4 text-xl font-normal text-heading">Nadia Kern</h5>
            <p className="text-sm">A Web Designer Based from London</p>
            <p className="mt-3 text-sm">
              With supporting text below as a natural lead-in to additional content.
            </p>
            <p className="mt-4 font-medium text-primary">Available for Freelance</p>
          </article>
        </div>
      </div>
    </ShowcaseSection>
  )
}
