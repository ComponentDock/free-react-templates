import { MapPin, CalendarDays, Car, Smile } from 'lucide-react'

const steps = [
  { icon: MapPin, title: 'Pick Destination', desc: 'Choose where you want to go and when.' },
  { icon: CalendarDays, title: 'Select Term', desc: 'Pick your rental period and dates.' },
  { icon: Car, title: 'Choose A Car', desc: 'Browse our fleet and select your vehicle.' },
  { icon: Smile, title: 'Enjoy The Ride', desc: 'Hit the road and enjoy your journey.' },
]

export function HowItWorks() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/highway-road/1600/600)',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white">How it works</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm text-white/70">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
