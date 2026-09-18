import { HandCoins, Droplets, Users } from 'lucide-react'
import { reasons } from '../data'

const iconMap: Record<string, React.ReactNode> = {
  HandCoins: <HandCoins className="h-10 w-10 text-primary" />,
  Droplets: <Droplets className="h-10 w-10 text-primary" />,
  Users: <Users className="h-10 w-10 text-primary" />,
}

export function Reasons() {
  return (
    <section className="bg-light py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl text-ink">Reason of Helping</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-light">
                {iconMap[reason.icon]}
              </div>
              <h3 className="mb-3 font-heading text-xl text-ink">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-body">{reason.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-semibold text-primary transition-colors hover:text-primary-600"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
