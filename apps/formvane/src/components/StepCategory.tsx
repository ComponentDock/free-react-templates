export interface CategoryData {
  selected: string
}

const CATEGORIES = [
  {
    id: 'programming',
    label: 'Programming',
    image: 'https://picsum.photos/seed/formvane-programming/200/140',
  },
  { id: 'sports', label: 'Sports', image: 'https://picsum.photos/seed/formvane-sports/200/140' },
  {
    id: 'business',
    label: 'Business',
    image: 'https://picsum.photos/seed/formvane-business/200/140',
  },
  {
    id: 'tour-guide',
    label: 'Tour Guide',
    image: 'https://picsum.photos/seed/formvane-tourguide/200/140',
  },
  {
    id: 'art-design',
    label: 'Art-Design',
    image: 'https://picsum.photos/seed/formvane-artdesign/200/140',
  },
  { id: 'doctor', label: 'Doctor', image: 'https://picsum.photos/seed/formvane-doctor/200/140' },
]

interface StepCategoryProps {
  data: CategoryData
  onChange: (data: CategoryData) => void
}

export function StepCategory({ data, onChange }: StepCategoryProps) {
  return (
    <div>
      <h3
        className="mb-8 text-center text-[35px] font-semibold uppercase leading-tight tracking-[3px] text-brand-400"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        What are you doing?
      </h3>
      <div className="flex flex-wrap justify-between">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onChange({ selected: cat.id })}
            className={`flex w-[31.25%] cursor-pointer border-0 bg-transparent p-0 ${data.selected === cat.id ? 'active' : ''}`}
            aria-label={`Select ${cat.label}`}
            aria-pressed={data.selected === cat.id}
          >
            <div className="w-[86.04%] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.label}
                className="block w-full transition-opacity hover:opacity-60"
              />
            </div>
            <div
              className={`flex w-[13.96%] items-center justify-center py-2 text-[11px] font-medium uppercase tracking-wide text-white ${
                data.selected === cat.id ? 'bg-brand-400' : 'bg-surface-400'
              }`}
              style={{
                fontFamily: 'Poppins, sans-serif',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              {cat.label}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
