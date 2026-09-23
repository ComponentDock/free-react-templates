import { MapPin, Mail, Phone } from 'lucide-react'

const widgets = [
  {
    icon: MapPin,
    title: 'Address',
    content: '203 Conference Blvd,\nMountain View, CA 94043',
  },
  {
    icon: Mail,
    title: 'Email Address',
    content: 'info@festpoint.com\nsupport@festpoint.com',
  },
  {
    icon: Phone,
    title: 'Phone Number',
    content: '+1 (555) 123-4567\n+1 (555) 987-6543',
  },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Widget area */}
      <div className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {widgets.map((widget) => (
              <div key={widget.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-fest-400/20 text-fest-400">
                  <widget.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
                    {widget.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400 whitespace-pre-line">
                    {widget.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
          <a href="#home" className="text-lg font-bold">
            Fest<span className="text-fest-400">point.</span>
          </a>
          <p className="text-sm text-gray-400">
            Copyright &copy; {new Date().getFullYear()} &middot; Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fest-400 underline transition-colors hover:text-fest-300"
            >
              Component Dock
            </a>
          </p>
          <div className="flex gap-4">
            {['Twitter', 'Facebook', 'Instagram'].map((platform) => (
              <a
                key={platform}
                href="#"
                aria-label={platform}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm text-gray-400 transition-colors hover:bg-fest-400 hover:text-white"
              >
                {platform[0]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
