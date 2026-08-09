import { Award, HeartPulse, ShieldCheck, Users } from 'lucide-react'

const stats = [
  { icon: Award, value: '25+', label: 'Years Experience' },
  { icon: Users, value: '50+', label: 'Doctors Board Certified' },
  { icon: HeartPulse, value: '100,000+', label: 'Patients Treated' },
  { icon: ShieldCheck, value: '4.9/5', label: 'Patient Rating' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://picsum.photos/seed/cura-clinic/700/520"
              alt="Inside a modern Cura clinic"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -bottom-5 right-4 flex items-center gap-3 rounded-2xl bg-primary-600 px-5 py-4 text-white shadow-xl sm:right-8">
              <Award className="h-8 w-8" aria-hidden="true" />
              <span>
                <span className="block text-lg font-extrabold leading-tight">25+ Years</span>
                <span className="block text-xs font-semibold text-primary-100">
                  Of Trusted Care
                </span>
              </span>
            </div>
          </div>
          <div>
            <span className="inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
              About Cura
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              About Cura
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              For over 25 years, Cura has delivered compassionate, patient-centered healthcare to
              our community. From preventive checkups to specialized treatment, our board-certified
              physicians combine clinical excellence with genuine human care.
            </p>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Every clinic is equipped with state-of-the-art diagnostic technology, and every care
              plan is built around you — never the other way around.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
                    <stat.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-2xl font-extrabold text-gray-900 dark:text-white">
                      {stat.value}
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      {stat.label}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
