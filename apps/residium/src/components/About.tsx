import { Building2, Users } from 'lucide-react'

const STATS = [
  { value: '120', label: 'Buildings', icon: Building2 },
  { value: '500+', label: 'Clients', icon: Users },
]

const FEATURES = [
  'Premium real estate solutions',
  'Experienced professional team',
  'Client-focused approach',
  'Trusted industry leaders',
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Experience badge */}
          <div className="flex justify-center lg:col-span-5">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border-4 border-red-500 text-center">
              <div>
                <span className="block text-5xl font-bold font-heading text-red-500">10</span>
                <span className="text-sm text-gray-500">Years of Experience</span>
              </div>
            </div>
          </div>

          {/* About info */}
          <div className="lg:col-span-7">
            <h2 className="font-heading text-4xl font-bold text-navy-800">
              We are Residium
              <br />
              <span className="text-red-500">Real Estate Company</span>
            </h2>
            <div className="mt-4 flex gap-1">
              <span className="h-1 w-12 bg-red-500" />
              <span className="h-1 w-4 bg-red-500" />
            </div>
            <p className="mt-6 leading-relaxed text-gray-500">
              Delivering exceptional real estate solutions with over a decade of experience. We
              combine expertise with a passion for creating outstanding living spaces.
            </p>
            <ul className="mt-6 space-y-2">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-center gap-2 text-gray-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 flex gap-12">
              {STATS.map(({ value, label, icon: Icon }) => (
                <div key={label} className="flex items-baseline gap-3">
                  <Icon className="h-6 w-6 text-red-500" />
                  <div>
                    <span className="text-3xl font-bold font-heading text-navy-800">{value}</span>
                    <span className="ml-2 text-sm text-gray-500">{label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
