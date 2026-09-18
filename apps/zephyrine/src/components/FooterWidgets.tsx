import { MapPin, Mail, Phone } from 'lucide-react'

const widgets = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['123 Creative Avenue', 'Design District', 'New York, NY 10001'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['hello@zephyrine.com', 'support@zephyrine.com'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
  },
]

export function FooterWidgets() {
  return (
    <section className="bg-[#f9f9ff] py-16">
      <div className="max-w-[68.75%] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {widgets.map((widget) => (
            <div key={widget.title} className="text-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ background: 'linear-gradient(0deg, #e66587, #f09458)' }}
              >
                <widget.icon size={24} className="text-white" />
              </div>
              <h4 className="text-[#222222] font-semibold text-sm uppercase mb-3">
                {widget.title}
              </h4>
              {widget.lines.map((line) => (
                <p key={line} className="text-[#777777] text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
