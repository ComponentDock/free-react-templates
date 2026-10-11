import { Home } from 'lucide-react'
import { Band, SectionHeading } from './Band'
import { KitButton } from './KitButton'

const CARD_COPY =
  "Some quick example text to build on the card title and make up the bulk of the card's content."

/** Three card flavors sharing one shadow and one copy block. */
export function CardsShowcase() {
  return (
    <Band>
      <SectionHeading className="mb-5">Cards</SectionHeading>
      <div className="grid gap-8 md:grid-cols-3">
        <div className="overflow-hidden rounded-sm bg-white shadow-card">
          <img
            src="https://picsum.photos/seed/flairkit-card-1/600/400"
            alt="Card cover"
            loading="lazy"
            decoding="async"
            className="block w-full"
          />
          <div className="p-8">
            <h5 className="text-[1.25rem]">Card title</h5>
            <p className="mb-8">{CARD_COPY}</p>
            <KitButton color="primary" variant="solid" size="md">
              Go somewhere
            </KitButton>
          </div>
        </div>

        <div className="rounded-sm bg-white px-8 pt-8 pb-10 text-center shadow-card">
          <Home className="mx-auto h-[30px] w-[30px] text-flair-primary" aria-hidden="true" />
          <div className="mt-4">
            <h5 className="text-[1.25rem]">Card title</h5>
            <p className="mb-8">{CARD_COPY}</p>
            <KitButton color="primary" variant="solid" size="md">
              Go somewhere
            </KitButton>
          </div>
        </div>

        <div className="rounded-sm bg-white py-8 text-center shadow-card">
          <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-flair-primary">
            <Home className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <div className="mt-4">
            <h5 className="my-3 text-[1.25rem]">Card title</h5>
            <p className="mb-8">{CARD_COPY}</p>
            <KitButton color="primary" variant="solid" size="md">
              Go somewhere
            </KitButton>
          </div>
        </div>
      </div>
    </Band>
  )
}
