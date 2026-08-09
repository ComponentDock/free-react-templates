import { Bug, Cloud, Fingerprint, Radar, ShieldCheck, Siren } from 'lucide-react'

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Endpoint Detection & Response',
    blurb:
      'AI-powered EDR with real-time detection, automated containment, and forensic analysis on every endpoint.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    blurb:
      'AWS, Azure, and GCP workload protection with runtime visibility, misconfiguration detection, and compliance.',
  },
  {
    icon: Fingerprint,
    title: 'Identity Protection',
    blurb:
      'Behavioral analytics, MFA enforcement, and credential-compromise detection to secure every identity.',
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    blurb:
      'Global threat sources enriched with AI to deliver actionable, prioritized insights to your team.',
  },
  {
    icon: Bug,
    title: 'Vulnerability Management',
    blurb:
      'Continuous scanning and prioritized remediation across the full code-to-cloud pipeline.',
  },
  {
    icon: Siren,
    title: 'Incident Response',
    blurb:
      'A 24/7 expert team with automated playbooks and forensics for rapid containment and recovery.',
  },
] as const

export function Defense() {
  return (
    <section id="solutions" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Solutions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Complete Cyber Defense
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            From endpoint to cloud, our integrated security platform protects every layer of your
            digital infrastructure against advanced threats.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
