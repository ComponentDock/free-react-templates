import { Smartphone, AppWindow, Palette, PenTool, Printer } from 'lucide-react'

const capabilities = [
  {
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Beautiful layouts that adapt seamlessly to every screen size.',
  },
  {
    icon: AppWindow,
    title: 'Android Apps Development',
    desc: 'Native and cross-platform Android applications with modern toolkits.',
  },
  {
    icon: Palette,
    title: 'iOS Apps Development',
    desc: 'Elegant, performant iOS apps built with Swift and SwiftUI.',
  },
  {
    icon: PenTool,
    title: 'UX/UI Design',
    desc: 'User-centered design systems and interactive prototypes.',
  },
  {
    icon: Printer,
    title: 'Print Ready Design',
    desc: 'High-resolution, press-ready artwork for offline materials.',
  },
]

export function Capabilities() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-heading">
          What Our Software Can Do For You
        </h2>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left illustration */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/cirrus-caps/600/500"
              alt="Software capabilities illustration"
              className="w-full max-w-[500px] rounded-lg object-cover"
            />
          </div>

          {/* Right capabilities */}
          <div className="flex flex-col gap-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 rounded border border-gray-200 p-4"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full">
                  <c.icon size={44} className="text-brand-pink" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-heading">{c.title}</h3>
                  <p className="text-sm text-muted">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
