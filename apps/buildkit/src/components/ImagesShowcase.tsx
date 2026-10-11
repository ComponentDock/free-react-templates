import { cn } from '@free-react-templates/ui'
import { ShowcaseSection, SubHeading } from './section'

const IMAGE_GROUPS = [
  {
    id: 'rounded',
    title: 'Rounded Image',
    className: 'rounded-lg shadow-none',
    seed: 'buildkit-img-rounded',
  },
  {
    id: 'circle',
    title: 'Circle Image',
    className: 'rounded-full shadow-none',
    seed: 'buildkit-img-circle',
  },
  {
    id: 'rounded-raised',
    title: 'Rounded Raised',
    className: 'rounded-lg shadow-material',
    seed: 'buildkit-img-rounded-raised',
  },
  {
    id: 'circle-raised',
    title: 'Circle Raised',
    className: 'rounded-full shadow-material',
    seed: 'buildkit-img-circle-raised',
  },
]

export function ImagesShowcase() {
  return (
    <ShowcaseSection id="images" title="Images">
      {IMAGE_GROUPS.map(({ id, title, className, seed }) => (
        <div key={id} className="space-y-4">
          <SubHeading>{title}</SubHeading>
          <img
            src={`https://picsum.photos/seed/${seed}/400/260`}
            alt={`${title} placeholder`}
            width={400}
            height={260}
            className={cn('h-40 w-64 object-cover', className)}
            loading="lazy"
          />
        </div>
      ))}
    </ShowcaseSection>
  )
}
