import { BarChart3, Headphones, Plug, ShieldCheck, Users, Workflow } from 'lucide-react'
import { Reveal } from './Reveal'

const features = [
  {
    title: 'Workflow Automation',
    blurb:
      'Automate repetitive tasks and keep every process moving with powerful, no-code workflow builders.',
    icon: Workflow,
  },
  {
    title: 'Real-time Collaboration',
    blurb:
      'Work together in real time with shared boards, comments and instant updates across your team.',
    icon: Users,
  },
  {
    title: 'Advanced Analytics',
    blurb:
      'Deep insights into performance, usage and team velocity with customizable dashboards and reports.',
    icon: BarChart3,
  },
  {
    title: 'Enterprise Security',
    blurb:
      'Bank-grade encryption, SSO, audit logs and compliance certifications for complete peace of mind.',
    icon: ShieldCheck,
  },
  {
    title: 'API & Integrations',
    blurb: 'Connect with 50+ tools you already use. REST API and webhooks for custom integrations.',
    icon: Plug,
  },
  {
    title: '24/7 Support',
    blurb:
      'Get help when you need it with our dedicated support team and comprehensive documentation.',
    icon: Headphones,
  },
] as const

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Everything you need to ship faster
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Powerful tools that help your team move from idea to launch without the busywork.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal
              key={feature.title}
              delay={index * 100}
              className="group rounded-2xl bg-white p-8 shadow-soft transition-all hover:shadow-soft-lg dark:bg-gray-950"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {feature.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
