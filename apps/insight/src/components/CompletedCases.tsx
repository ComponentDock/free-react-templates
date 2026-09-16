import { Award, Briefcase, Users } from 'lucide-react'

const stats = [
  { icon: Award, value: '450', label: 'Projects Completed' },
  { icon: Users, value: '120', label: 'Happy Clients' },
  { icon: Briefcase, value: '15', label: 'Years Experience' },
]

export function CompletedCases() {
  return (
    <section className="bg-lavender py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-2xl font-bold text-navy-dark">Completed Cases</h2>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="relative w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/insight-cases/800/500"
              alt="Completed cases"
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-6 rounded-lg bg-navy/70 p-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center text-white">
                  <s.icon className="mx-auto mb-1 h-6 w-6 text-brand" />
                  <div className="text-2xl font-bold text-brand">{s.value}</div>
                  <div className="text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full space-y-6 md:w-1/2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-navy-dark">Marketing Strategy</h3>
              <p className="text-sm leading-relaxed text-muted">
                Our strategic marketing approach combines data-driven insights with creative
                execution to deliver campaigns that resonate with your target audience.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-navy-dark">Brand Development</h3>
              <p className="text-sm leading-relaxed text-muted">
                We craft distinctive brand identities that communicate your values and connect with
                customers on an emotional level.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-navy-dark">Digital Transformation</h3>
              <p className="text-sm leading-relaxed text-muted">
                End-to-end digital solutions that modernize operations and create new revenue
                streams for your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
