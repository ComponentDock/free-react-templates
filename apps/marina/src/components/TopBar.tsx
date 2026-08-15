import { Mail, MapPin, Phone, Sailboat } from 'lucide-react'
import { contactBlocks } from '../data'

const icons = {
  'map-pin': MapPin,
  phone: Phone,
  mail: Mail,
} as const

export function TopBar() {
  return (
    <div className="bg-light">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2" aria-label="Marina home">
          <Sailboat className="h-7 w-7 text-brand" aria-hidden="true" />
          <span className="font-heading text-2xl font-bold uppercase tracking-wide text-ink">
            Marina
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {contactBlocks.map((block) => {
            const Icon = icons[block.icon]
            return (
              <div key={block.line1} className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                <div className="text-sm leading-tight">
                  <p className="font-semibold text-ink">{block.line1}</p>
                  <p className="text-body">{block.line2}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
