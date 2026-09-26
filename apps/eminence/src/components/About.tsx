import { DollarSign, Briefcase, Users } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: '$2.5M', label: 'Total Donation' },
  { icon: Briefcase, value: '1465', label: 'Total Projects' },
  { icon: Users, value: '3965', label: 'Total Volunteers' },
]

const skills = [
  { name: 'After Effects', percentage: 85 },
  { name: 'Photoshop', percentage: 90 },
  { name: 'Illustrator', percentage: 70 },
  { name: 'Sublime', percentage: 95 },
  { name: 'Sketch', percentage: 75 },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: About text + stats */}
          <div>
            <h2 className="text-3xl font-bold mb-4 font-[var(--font-heebo)]">About Myself</h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              A passionate creative professional with expertise in design and development. I bring
              ideas to life through thoughtful design and clean code, working with clients worldwide
              to create meaningful digital experiences.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon size={28} className="mx-auto mb-2 text-brand" />
                  <h3 className="text-2xl font-bold text-brand font-[var(--font-heebo)]">
                    {value}
                  </h3>
                  <p className="text-sm text-text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skill bars */}
          <div className="space-y-6">
            {skills.map(({ name, percentage }) => (
              <div key={name}>
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium font-[var(--font-heebo)]">{name}</h4>
                  <span className="text-text-secondary text-sm">{percentage}%</span>
                </div>
                <div className="w-full h-2 bg-line rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand rounded-full transition-all duration-700"
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
