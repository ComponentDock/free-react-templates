import { cn } from '@free-react-templates/ui'

interface Step2Props {
  selectedCategory: string | null
  onSelectCategory: (cat: string) => void
}

const categories = [
  { id: 'programming', label: 'Programming', color: 'from-indigo-500/80 to-purple-600/80' },
  { id: 'research', label: 'Research', color: 'from-emerald-500/80 to-teal-600/80' },
  { id: 'teacher', label: 'Teacher', color: 'from-amber-500/80 to-orange-600/80' },
  { id: 'tour-guide', label: 'Tour Guide', color: 'from-sky-500/80 to-blue-600/80' },
  { id: 'business', label: 'Business', color: 'from-rose-500/80 to-pink-600/80' },
  { id: 'artist', label: 'Artist', color: 'from-violet-500/80 to-fuchsia-600/80' },
]

export function Step2({ selectedCategory, onSelectCategory }: Step2Props) {
  return (
    <div className="mt-2">
      <div className="grid grid-cols-3 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelectCategory(cat.id)}
            className={cn(
              'group relative flex h-28 flex-col items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br text-white transition-shadow hover:shadow-lg',
              cat.color,
              selectedCategory === cat.id && 'ring-2 ring-white ring-offset-2',
            )}
          >
            <span className="text-[11px] font-medium uppercase">{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
