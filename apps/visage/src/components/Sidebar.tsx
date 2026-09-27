import { Mail, Phone, Globe, MapPin, Calendar } from 'lucide-react'
import type { ReactNode } from 'react'

interface InfoItemProps {
  icon: ReactNode
  label: string
  value: string
}

function InfoItem({ icon, label, value }: InfoItemProps) {
  return (
    <li className="flex items-center gap-3 py-2">
      <span className="flex h-8 w-8 items-center justify-center text-brand">{icon}</span>
      <span className="text-sm text-body">
        {label}: <span className="font-medium text-paragraph">{value}</span>
      </span>
    </li>
  )
}

export function Sidebar() {
  return (
    <aside
      className="flex w-full flex-col border-r border-gray-200 bg-white xl:w-[300px]"
      data-testid="sidebar"
    >
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src="https://picsum.photos/seed/visage-profile/600/600"
          alt="Profile photo"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-dark">
          General Information
        </h3>
        <ul className="space-y-1">
          <InfoItem icon={<Calendar className="h-4 w-4" />} label="Name" value="Jeremy Smith" />
          <InfoItem icon={<MapPin className="h-4 w-4" />} label="Location" value="London, UK" />
          <InfoItem icon={<Mail className="h-4 w-4" />} label="Email" value="hello@visage.dev" />
          <InfoItem icon={<Phone className="h-4 w-4" />} label="Phone" value="+44 7654 321098" />
          <InfoItem icon={<Globe className="h-4 w-4" />} label="Website" value="www.visage.dev" />
        </ul>
        <div className="mt-6 flex gap-3">
          {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={platform}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-xs font-bold text-white transition-colors hover:bg-brand"
            >
              {platform[0]}
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
