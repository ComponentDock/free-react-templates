import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const PORTRAIT = 'https://picsum.photos/seed/sorbet-person/400/400'

const IMAGE_GROUPS = [
  { id: 'rounded', title: 'Rounded Image', className: 'rounded' },
  { id: 'circle', title: 'Circle Image', className: 'rounded-full' },
  { id: 'circle-raised', title: 'Circle Raised', className: 'rounded-full shadow-card' },
]

/** Three photo treatments over one shared portrait, each with its caption. */
export function ImagesShowcase() {
  return (
    <ShowcaseSection id="images" title="Images">
      <div className="grid gap-8 md:grid-cols-3">
        {IMAGE_GROUPS.map(({ id, title, className }) => (
          <figure key={id} className="text-center">
            <h3 className="mb-4 text-xl text-heading">{title}</h3>
            <img
              src={PORTRAIT}
              alt={`${title} placeholder`}
              width={240}
              height={240}
              loading="lazy"
              className={cn('mx-auto h-60 w-60 object-cover', className)}
            />
            <figcaption className="mt-3 text-sm">Clyde Ford</figcaption>
          </figure>
        ))}
      </div>
    </ShowcaseSection>
  )
}
