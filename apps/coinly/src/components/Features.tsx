import { Headphones, RefreshCw, Repeat, ShieldCheck, Smartphone, Wallet } from 'lucide-react'

const features = [
  { title: 'Mobile Apps', Icon: Smartphone },
  { title: 'Safe & Secure', Icon: ShieldCheck },
  { title: 'Wallet', Icon: Wallet },
  { title: 'Experts Support', Icon: Headphones },
  { title: 'Instant Exchange', Icon: RefreshCw },
  { title: 'Recuring Buys', Icon: Repeat },
] as const

export function Features() {
  return (
    <section id="features" className="bg-gradient-to-r from-grad-start to-grad-end py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-4xl font-medium text-white md:text-5xl">
          Our Features
        </h2>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, Icon }) => (
            <div key={title}>
              <Icon className="h-12 w-12 text-white" aria-hidden="true" />
              <div className="pl-16 -mt-8">
                <h4 className="mb-3 font-display text-2xl font-medium text-white">{title}</h4>
                <a
                  href="#features"
                  className="text-sm text-white underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Readmore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
