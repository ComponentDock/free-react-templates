import { Smartphone } from 'lucide-react'

export function MobileApp() {
  return (
    <section id="app" className="bg-surface py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-wider text-coral">Mobile App</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Track from Anywhere</h2>
          <p className="text-light/70">
            Stay connected to your portfolio and the crypto market wherever you go. Our mobile app
            provides real-time price tracking, instant notifications, and secure wallet management.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-coral px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Google Playstore
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-coral px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              <Smartphone className="h-4 w-4" aria-hidden="true" />
              Apple Appstore
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://picsum.photos/seed/coinforge-mobile/350/600"
            alt="Mobile app screenshot"
            className="w-full max-w-xs rounded-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
