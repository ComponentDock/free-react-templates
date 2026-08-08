import { Building2, BookOpen, UserSearch, CalendarCheck } from 'lucide-react'

const tiles = [
  {
    label: 'Departments',
    subtext: 'The Backbone of Our Clinic',
    href: '#departments',
    icon: Building2,
  },
  {
    label: 'Medical Services',
    subtext: 'A List of All Services',
    href: '#departments',
    icon: BookOpen,
  },
  {
    label: 'Find a Doctor',
    subtext: 'Our Staff by Department',
    href: '#doctors',
    icon: UserSearch,
  },
  {
    label: 'Request an Appointment',
    subtext: 'Call Us or Book Online',
    href: '#appointment',
    icon: CalendarCheck,
  },
] as const

export function FeatureBar() {
  return (
    <section
      aria-label="Quick access"
      className="bg-gradient-to-r from-[#0c65ae] via-[#3a9ef3] to-[#6cb4f2]"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <a
            key={tile.label}
            href={tile.href}
            className="flex flex-col items-center gap-2 px-6 py-10 text-center text-white transition-colors hover:bg-black/10"
          >
            <tile.icon className="h-9 w-9" aria-hidden="true" />
            <span className="text-sm font-bold uppercase tracking-widest">{tile.label}</span>
            <span className="text-xs text-white/85">{tile.subtext}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
