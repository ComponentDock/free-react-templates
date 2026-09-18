import { Award, Users, FolderOpen } from 'lucide-react'

const stats = [
  { icon: FolderOpen, value: '450+', label: 'Projects Completed' },
  { icon: Users, value: '200+', label: 'Happy Clients' },
  { icon: Award, value: '35+', label: 'Awards Won' },
] as const

export function About() {
  return (
    <section id="about" aria-label="About" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
              About Our Agency
            </h2>
            <p className="mt-6 leading-relaxed text-body dark:text-gray-400">
              We are a passionate team of designers, developers, and strategists dedicated to
              creating exceptional digital experiences. With over a decade of experience, we've
              helped hundreds of brands establish their online presence and achieve their business
              objectives.
            </p>
            <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
              Our approach combines creative design thinking with technical expertise to deliver
              solutions that are not only visually stunning but also performant and scalable.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-white p-6 text-center shadow-sm dark:bg-gray-800"
              >
                <s.icon className="mx-auto h-8 w-8 text-primary-500" aria-hidden="true" />
                <p className="mt-3 font-display text-2xl font-bold text-ink dark:text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-body dark:text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
