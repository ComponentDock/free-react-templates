import { cn } from '@free-react-templates/ui'
import { ShowcaseSection } from './section'

const CAPTION = 'Rowan Ellis'

const IMAGES = [
  {
    label: 'Rounded Image',
    src: 'https://picsum.photos/seed/structkit-image-1/600/400',
    className: 'rounded-lg',
  },
  {
    label: 'Circle Image',
    src: 'https://picsum.photos/seed/structkit-image-2/400/400',
    className: 'rounded-full',
  },
  {
    label: 'Circle Raised',
    src: 'https://picsum.photos/seed/structkit-image-3/400/400',
    className: 'rounded-full shadow-raised',
  },
]

/** Three image treatments — rounded, circle and the raised circle. */
export function ImagesShowcase() {
  return (
    <ShowcaseSection id="images" title="Images" className="bg-light">
      <div className="grid gap-10 md:grid-cols-3">
        {IMAGES.map(({ label, src, className }) => (
          <figure key={label} className="text-center">
            <img
              src={src}
              alt={`${label} example`}
              className={cn('mx-auto w-full max-w-xs object-cover', className)}
            />
            <figcaption className="mt-4">{CAPTION}</figcaption>
          </figure>
        ))}
      </div>
    </ShowcaseSection>
  )
}
