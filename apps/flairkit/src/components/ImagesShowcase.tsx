import { cn } from '@free-react-templates/ui'
import { Band, SectionHeading } from './Band'

const SHARED_IMAGE = 'https://picsum.photos/seed/flairkit-img-1/600/450'

const IMAGE_VARIANTS: { caption: string; className: string }[] = [
  { caption: 'Rounded Raised Image', className: 'rounded shadow-raised' },
  { caption: 'Rounded Image', className: 'rounded' },
  { caption: 'Circle Image', className: 'rounded-full' },
  { caption: 'Thumbnail Image', className: 'rounded border border-gray-200 p-1' },
]

/** Four treatments of one shared photo, side by side on a light band. */
export function ImagesShowcase() {
  return (
    <Band className="bg-band">
      <SectionHeading className="mb-5">Images</SectionHeading>
      <div className="grid gap-8 md:grid-cols-4">
        {IMAGE_VARIANTS.map(({ caption, className }) => (
          <div key={caption} className="text-center">
            <span className="mb-3 block">{caption}</span>
            <img
              src={SHARED_IMAGE}
              alt={caption}
              loading="lazy"
              decoding="async"
              className={cn('w-3/4', className)}
            />
          </div>
        ))}
      </div>
    </Band>
  )
}
