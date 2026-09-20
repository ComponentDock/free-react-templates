import { Phone, MessageSquare, ClipboardCheck } from 'lucide-react'

const steps = [
  { icon: Phone, title: 'Contact' },
  { icon: MessageSquare, title: 'Consulting' },
  { icon: ClipboardCheck, title: 'Register' },
] as const

export function Enrollment() {
  return (
    <section
      aria-label="Enrollment"
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(2,0,49,0.8), rgba(2,0,49,0.85)), url(https://picsum.photos/seed/lectern-enroll/1600/600)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">Enrollment</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <step.icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="text-lg font-bold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
