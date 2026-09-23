import { MapPin, Globe, Phone } from 'lucide-react'

const widgets = [
  {
    icon: MapPin,
    title: 'Address',
    text: '123 Creative Avenue, Design District, CA 90210',
  },
  {
    icon: Globe,
    title: 'Email Address',
    text: 'hello@reimagine.studio',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    text: '+1 (555) 123-4567',
  },
]

export function FooterWidgets() {
  return (
    <section
      className="py-12 text-white"
      style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
    >
      <div className="mx-auto max-w-[69%] px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {widgets.map((w) => {
          const Icon = w.icon
          return (
            <div key={w.title} className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <h6 className="font-medium text-sm mb-1">{w.title}</h6>
                <p className="text-white/80 text-xs leading-relaxed">{w.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
