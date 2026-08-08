import { Eye, Fingerprint, Landmark, Lock, Radar, ShieldCheck } from 'lucide-react'

const protections = [
  {
    icon: ShieldCheck,
    title: 'SIPC Protected',
    description: 'Securities in your account are protected up to $500,000 by SIPC.',
  },
  {
    icon: Landmark,
    title: 'FDIC Insured Cash',
    description: 'Uninvested cash is swept to FDIC-insured partner banks, up to $2M in coverage.',
  },
  {
    icon: Lock,
    title: '256-bit Encryption',
    description: 'Your data is encrypted end-to-end with the same standards used by banks.',
  },
  {
    icon: Fingerprint,
    title: 'Two-Factor Auth',
    description: 'Optional biometric and app-based 2FA keeps your account locked down.',
  },
  {
    icon: Eye,
    title: 'SEC Registered',
    description: 'Tradewell is a registered broker-dealer and member of FINRA and SIPC.',
  },
  {
    icon: Radar,
    title: '24/7 Monitoring',
    description: 'Our security team monitors for suspicious activity around the clock.',
  },
] as const

export function Security() {
  return (
    <section className="bg-primary-950 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl">
            Your Assets Are <span className="text-primary-300">Protected & Secure</span>
          </h2>
          <p className="mt-4 text-lg text-primary-200/70">
            Industry-leading security and regulation keep your money — and your data — safe.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {protections.map((protection) => (
            <div
              key={protection.title}
              className="rounded-xl border border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/20 text-primary-300">
                <protection.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-white">{protection.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-200/70">
                {protection.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
