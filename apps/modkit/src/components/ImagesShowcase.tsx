import { Band, GroupLabel } from './Band'

const IMAGE = 'https://picsum.photos/seed/modkit-img-1/600/400'

const VARIANTS: { id: string; label: string; classes: string }[] = [
  { id: 'raised', label: 'Rounded Raised Image', classes: 'rounded shadow-kit-raised' },
  { id: 'rounded', label: 'Rounded Image', classes: 'rounded' },
  { id: 'circle', label: 'Circle Image', classes: 'rounded-full aspect-square object-cover' },
  { id: 'thumbnail', label: 'Thumbnail Image', classes: 'rounded border-4 border-gray-200' },
]

export function ImagesShowcase() {
  return (
    <Band
      title="Images"
      lead="The kit's image treatments: raised, rounded, circular, and bordered thumbnail shapes over one shared placeholder."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {VARIANTS.map((variant) => (
          <div key={variant.id} className="text-center">
            <GroupLabel className="mb-3 text-[0.9rem] text-body">{variant.label}</GroupLabel>
            <img
              src={IMAGE}
              alt={`${variant.label} sample`}
              className={`w-3/4 max-w-[240px] ${variant.classes}`}
            />
          </div>
        ))}
      </div>
    </Band>
  )
}
