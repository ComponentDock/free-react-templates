import { cn } from '@free-react-templates/ui'

const features = [
  {
    title: 'Strategy',
    description:
      'We develop comprehensive strategies tailored to your business goals and market position.',
  },
  {
    title: 'Design',
    description:
      'Our design team creates stunning visuals that capture your brand essence and resonate with your audience.',
  },
  {
    title: 'Development',
    description: 'We build fast, responsive, and scalable solutions using the latest technologies.',
  },
]

const skills = [
  { name: 'Design', percent: 70 },
  { name: 'Branding', percent: 85 },
  { name: 'Marketing', percent: 75 },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: Features */}
          <div>
            <h2 className="text-3xl font-bold text-navy-700 sm:text-4xl">
              We have experience for your project
            </h2>
            <p className="mt-4 text-gray-600">
              Our team brings together years of expertise in digital strategy, design, and
              development to deliver exceptional results for our clients.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="text-lg font-semibold text-navy-700">{f.title}</h3>
                  <p className="mt-1 text-gray-500">{f.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skills */}
          <div className="flex flex-col justify-center">
            <h3 className="mb-6 text-xl font-semibold text-navy-700">Our Expertise</h3>
            <div className="space-y-6">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>{s.name}</span>
                    <span>{s.percent}%</span>
                  </div>
                  <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={cn('h-full rounded-full bg-pulse-400')}
                      style={{ width: `${s.percent}%` }}
                    />
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
