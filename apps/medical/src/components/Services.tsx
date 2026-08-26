import { HeartPulse, Stethoscope } from 'lucide-react'

const SERVICES = [
  {
    title: 'Cardiac Treatment',
    icon: HeartPulse,
    description:
      'Advanced cardiac care with experienced cardiologists and cutting-edge diagnostic equipment.',
  },
  {
    title: 'Routine Checkup',
    icon: Stethoscope,
    description: 'Comprehensive health checkups to monitor your wellbeing and catch issues early.',
  },
]

const DEPARTMENTS = [
  'Pediatric Diagnosis',
  'Outpatient Rehabilitation',
  'Laryngological Functions',
  'Ophthalmology Unit',
  'Cardiac Unit',
  'Outpatient Surgery',
  'Gynaecological Wings',
]

export function Services() {
  return (
    <section id="departments" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold text-ink">Our Offered Services</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {SERVICES.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="flex gap-4">
                <Icon className="h-10 w-10 flex-shrink-0 text-brand" />
                <div>
                  <h4 className="text-lg font-bold text-ink">{s.title}</h4>
                  <p className="mt-1 text-sm text-body">{s.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-lg bg-paper p-8">
          <h3 className="text-xl font-bold text-ink">Departments</h3>
          <ul className="mt-4 space-y-2">
            {DEPARTMENTS.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-body">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                {d}
              </li>
            ))}
          </ul>
          <a
            href="#departments"
            className="mt-6 inline-block rounded bg-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            VIEW ALL DEPARTMENTS
          </a>
        </div>
      </div>
    </section>
  )
}
