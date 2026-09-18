import { Phone } from 'lucide-react'

export function CTA() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/manor-cta/1920/300)' }}
    >
      <div className="absolute inset-0 bg-navy-800/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="max-w-xl font-heading text-2xl font-bold text-white sm:text-3xl">
            Do you want to talk with one of our{' '}
            <span className="text-coral-400">real estate experts?</span>
          </h2>
          <div className="flex items-center gap-3 rounded-lg bg-coral-400 px-6 py-3">
            <Phone className="h-5 w-5 text-white" />
            <div>
              <span className="block text-xs text-white/80">Call now:</span>
              <span className="font-heading text-lg font-bold text-white">+0080 234 567 84441</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
