import {
  Heart,
  Trash2,
  Send,
  CloudDownload,
  Share2,
  Edit,
  Save,
  Printer,
  Settings,
  Home,
} from 'lucide-react'

const buttons = [
  {
    label: 'Like',
    icon: Heart,
    color: 'bg-blue',
    shadow: 'shadow-[3px_5px_0_0_var(--color-blue-shadow)]',
    hover: 'hover:bg-blue/90',
  },
  {
    label: 'Delete',
    icon: Trash2,
    color: 'bg-indigo',
    shadow: 'shadow-[3px_5px_0_0_var(--color-indigo-shadow)]',
    hover: 'hover:bg-indigo/90',
  },
  {
    label: 'Send',
    icon: Send,
    color: 'bg-purple',
    shadow: 'shadow-[3px_5px_0_0_var(--color-purple-shadow)]',
    hover: 'hover:bg-purple/90',
  },
  {
    label: 'Download',
    icon: CloudDownload,
    color: 'bg-pink',
    shadow: 'shadow-[3px_5px_0_0_var(--color-pink-shadow)]',
    hover: 'hover:bg-pink/90',
  },
  {
    label: 'Share',
    icon: Share2,
    color: 'bg-red',
    shadow: 'shadow-[3px_5px_0_0_var(--color-red-shadow)]',
    hover: 'hover:bg-red/90',
  },
  {
    label: 'Edit',
    icon: Edit,
    color: 'bg-orange',
    shadow: 'shadow-[3px_5px_0_0_var(--color-orange-shadow)]',
    hover: 'hover:bg-orange/90',
  },
  {
    label: 'Save',
    icon: Save,
    color: 'bg-yellow',
    shadow: 'shadow-[3px_5px_0_0_var(--color-yellow-shadow)]',
    hover: 'hover:bg-yellow/90',
  },
  {
    label: 'Print',
    icon: Printer,
    color: 'bg-green',
    shadow: 'shadow-[3px_5px_0_0_var(--color-green-shadow)]',
    hover: 'hover:bg-green/90',
  },
  {
    label: 'Settings',
    icon: Settings,
    color: 'bg-teal',
    shadow: 'shadow-[3px_5px_0_0_var(--color-teal-shadow)]',
    hover: 'hover:bg-teal/90',
  },
  {
    label: 'Home',
    icon: Home,
    color: 'bg-cyan',
    shadow: 'shadow-[3px_5px_0_0_var(--color-cyan-shadow)]',
    hover: 'hover:bg-cyan/90',
  },
]

export function SolidButtons() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-5 lg:grid-cols-10">
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
