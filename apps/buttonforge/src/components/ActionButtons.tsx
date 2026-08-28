import { Camera, Download, MessageCircle, Heart, UserPlus } from 'lucide-react'

const actions = [
  {
    label: 'Watch Photos',
    icon: Camera,
    color: 'bg-primary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-primary-shadow)]',
  },
  {
    label: 'Download',
    icon: Download,
    color: 'bg-secondary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-secondary-shadow)]',
  },
  {
    label: 'Add Comment',
    icon: MessageCircle,
    color: 'bg-tertiary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-tertiary-shadow)]',
  },
  {
    label: 'Like',
    icon: Heart,
    color: 'bg-quarternary',
    shadow: 'shadow-[3px_5px_0_0_var(--color-quarternary-shadow)]',
    badge: '2',
  },
  {
    label: 'Create Account',
    icon: UserPlus,
    color: 'bg-dark',
    shadow: 'shadow-[3px_5px_0_0_rgba(0,0,0,0.3)]',
  },
]

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((a) => (
        <button
          key={a.label}
          type="button"
          className={`${a.color} ${a.shadow} inline-flex items-center gap-2 rounded px-4 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:opacity-90`}
        >
          <a.icon className="h-4 w-4" />
          {a.label}
          {a.badge && (
            <span className="ml-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/25 px-1.5 text-[11px] font-bold">
              {a.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}
