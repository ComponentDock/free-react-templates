import { Heart, Trash2, Send, CloudDownload } from 'lucide-react'

const buttons = [
  {
    label: 'Like',
    icon: Heart,
    color: 'bg-primary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-primary-shadow)]',
    hover: 'hover:bg-primary/90',
  },
  {
    label: 'Delete',
    icon: Trash2,
    color: 'bg-secondary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-secondary-shadow)]',
    hover: 'hover:bg-secondary/90',
  },
  {
    label: 'Send',
    icon: Send,
    color: 'bg-tertiary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-tertiary-shadow)]',
    hover: 'hover:bg-tertiary/90',
  },
  {
    label: 'Download',
    icon: CloudDownload,
    color: 'bg-quarternary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-quarternary-shadow)]',
    hover: 'hover:bg-quarternary/90',
  },
]

export function SolidButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          type="button"
          className={`${btn.color} ${btn.shadow} ${btn.hover} inline-flex items-center justify-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5`}
        >
          {btn.label}
          <btn.icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  )
}
