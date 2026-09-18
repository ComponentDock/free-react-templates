import { MapPin, Globe, Phone } from 'lucide-react'

const widgets = [
  {
    icon: MapPin,
    title: 'Address',
    content: (
      <p className="text-sm leading-relaxed text-gray-600">
        56/8, panthapath, west
        <br />
        dhanmondi, kalabagan,
        <br />
        Dhaka - 1205
      </p>
    ),
  },
  {
    icon: Globe,
    title: 'Email Address',
    content: (
      <div className="flex flex-col gap-1">
        <a href="mailto:info@batter.com" className="text-sm text-orange-500 hover:underline">
          info@batter.com
        </a>
        <a href="mailto:support@batter.com" className="text-sm text-orange-500 hover:underline">
          support@batter.com
        </a>
      </div>
    ),
  },
  {
    icon: Phone,
    title: 'Phone Number',
    content: (
      <div className="flex flex-col gap-1">
        <a href="tel:1545" className="text-sm text-orange-500 hover:underline">
          012 4562 982 3612
        </a>
        <a href="tel:54512" className="text-sm text-orange-500 hover:underline">
          012 6321 956 4587
        </a>
      </div>
    ),
  },
]

export function FooterWidgets() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {widgets.map((widget) => (
            <div key={widget.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                <widget.icon size={20} />
              </div>
              <div>
                <h6 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                  {widget.title}
                </h6>
                {widget.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
