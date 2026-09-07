import { StarRating } from './StarRating'

interface RatingsStepProps {
  ratings: Record<string, number>
  onRatingChange: (category: string, value: number) => void
}

const CATEGORIES = [
  { key: 'quality', label: 'Overall Quality' },
  { key: 'ease', label: 'Ease of Use' },
  { key: 'features', label: 'Features & Functionality' },
  { key: 'support', label: 'Customer Support' },
  { key: 'value', label: 'Value of Money' },
] as const

export function RatingsStep({ ratings, onRatingChange }: RatingsStepProps) {
  return (
    <div>
      <div className="flex gap-8">
        <figure className="m-0 p-0 ml-[10px] mb-[-126px] shrink-0 hidden md:block">
          <img
            src="https://picsum.photos/seed/scout-ratings/200/280"
            alt="Ratings illustration"
            className="w-[200px]"
          />
        </figure>
        <div className="flex-1">
          <h2 className="text-ink font-heading text-[22px] font-bold m-0 pb-[35px]">
            What do you think about AU services?
          </h2>
          {CATEGORIES.map(({ key, label }) => (
            <div key={key} className="flex items-center gap-4 mb-5">
              <label className="text-ink text-sm font-medium shrink-0 w-[200px]">{label}</label>
              <StarRating value={ratings[key] as number} onChange={(v) => onRatingChange(key, v)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
