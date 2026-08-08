import { Award, MessageSquare, Trophy, Users } from 'lucide-react'

const values = [
  {
    title: 'Proven Track Record',
    blurb:
      'Decades of successful outcomes in complex legal matters across multiple practice areas.',
    icon: Award,
  },
  {
    title: 'Client-Focused Approach',
    blurb:
      'We prioritize understanding your unique needs and goals to deliver tailored legal solutions.',
    icon: Users,
  },
  {
    title: 'Industry Recognition',
    blurb:
      'Our attorneys are consistently recognized by leading legal publications and peer organizations.',
    icon: Trophy,
  },
  {
    title: 'Transparent Communication',
    blurb:
      'We keep you informed at every stage, ensuring you understand your options and our strategy.',
    icon: MessageSquare,
  },
]

const stats = [
  { value: '40+', label: 'Years of Excellence' },
  { value: '500+', label: 'Cases Won' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Expert Attorneys' },
]

export function Legacy() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-900">
              <span className="font-display text-4xl font-bold text-accent-600 dark:text-accent-400">
                1985
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                Year Founded
              </span>
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-accent-600 dark:text-accent-400">
              About Our Firm
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-primary-900 sm:text-4xl dark:text-white">
              A Legacy of Legal Excellence
            </h2>

            <p className="mt-6 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              For over four decades, Verdict has been at the forefront of legal innovation and
              client service. Founded on principles of integrity, excellence, and dedication, our
              firm has grown from a small practice to one of the region&apos;s most respected legal
              institutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
              Our attorneys combine deep legal expertise with a genuine commitment to understanding
              each client&apos;s unique circumstances. We believe that exceptional legal
              representation goes beyond just knowing the law—it requires listening, strategizing,
              and advocating with passion.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-400/15 text-accent-600 dark:text-accent-400">
                  <value.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display mt-4 text-lg font-bold text-primary-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {value.blurb}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-200 pt-12 sm:grid-cols-4 dark:border-gray-800">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-accent-600 dark:text-accent-400">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
