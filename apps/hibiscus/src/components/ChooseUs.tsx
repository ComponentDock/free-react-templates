import { Clock, Shield, Wifi, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  { icon: Clock, title: '24/7 Reception', description: 'Round-the-clock front desk service.' },
  { icon: Shield, title: 'Security', description: 'Advanced security systems for your safety.' },
  { icon: Wifi, title: 'Free Wi-Fi', description: 'Complimentary high-speed internet access.' },
  { icon: Star, title: 'Premium Service', description: 'World-class hospitality and concierge.' },
]

export function ChooseUs({ className }: { className?: string }) {
  return (
    <section className={cn('relative py-24', className)}>
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/hibiscus-parallax/1920/1080)' }}
      />
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Text */}
          <div>
            <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-[4px] text-brand">
              Why Choose Us
            </p>
            <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
              Why You Should Choose Hibiscus Hotel
            </h2>
            <p className="mb-8 leading-relaxed text-white/70">
              Experience luxury hospitality at its finest. Our dedicated team ensures every moment
              of your stay exceeds expectations, from the moment you arrive until your departure.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand">
                    <f.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading text-sm font-bold text-white">{f.title}</h3>
                    <p className="text-xs text-white/60">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side — booking CTA */}
          <div className="hidden lg:block">
            <img
              src="https://picsum.photos/seed/hibiscus-choose/600/400"
              alt="Hibiscus Hotel"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
