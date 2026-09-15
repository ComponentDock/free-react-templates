import { HandCoins, Users, GraduationCap, TrendingUp } from 'lucide-react'
import { features } from '../data'

const iconMap: Record<string, React.ReactNode> = {
  HandCoins: <HandCoins className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-primary" />,
  GraduationCap: <GraduationCap className="h-8 w-8 text-primary" />,
  TrendingUp: <TrendingUp className="h-8 w-8 text-primary" />,
}

export function Features() {
  return (
    <section className="bg-white py-20" id="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Awesome Feature
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-ink">How Could You Help</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4 rounded-lg bg-purple/30 p-6">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-purple">
                {iconMap[feature.icon]}
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
