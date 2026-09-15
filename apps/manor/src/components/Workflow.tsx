import { MapPin, Search, Home } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    title: 'Choose a Location',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    icon: MapPin,
  },
  {
    number: '02',
    title: 'Find the Perfect Home',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Move in your new life',
    description:
      'Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor.',
    icon: Home,
  },
]

export function Workflow() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-navy-800">see how we operate</h2>
          <span className="text-sm text-gray-500">What you need to do</span>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="text-center">
                <div className="relative mx-auto mb-6 flex h-28 w-28 items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-coral-200" />
                  <div className="absolute inset-2 rounded-full border border-coral-300" />
                  <div className="relative flex flex-col items-center">
                    <Icon className="mb-1 h-8 w-8 text-coral-400" />
                    <span className="font-heading text-sm font-bold text-navy-800">
                      {step.number}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-navy-800">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
