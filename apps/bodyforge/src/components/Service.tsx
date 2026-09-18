import { Dumbbell, HeartPulse, Shield } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'Access the latest fitness machines and free weights for an effective workout.',
  },
  {
    icon: HeartPulse,
    title: 'Personal Training',
    description: 'Work with certified trainers who create customized plans for your goals.',
  },
  {
    icon: Shield,
    title: 'Safe Environment',
    description: 'Train with confidence in a clean, secure, and motivating facility.',
  },
] as const

export function Service() {
  return (
    <section
      className="relative bg-cover bg-center py-32"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bodyforge-service/1920/800)' }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-end px-4 sm:px-6 lg:flex-row">
        <div className="flex-1" />
        <div className="flex-1">
          <h2 className="font-display text-3xl font-bold uppercase text-white">Our Service</h2>
          <div className="mt-10 space-y-8">
            {services.map((svc) => (
              <div key={svc.title} className="flex gap-6">
                <svc.icon className="h-12 w-12 shrink-0 text-white" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-lg font-bold uppercase text-white">
                    {svc.title}
                  </h3>
                  <p className="mt-2 text-white/80">{svc.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
