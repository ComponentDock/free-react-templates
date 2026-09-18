import { Coins, Heart, Users, Target } from 'lucide-react'
import { stats } from '../data'

const iconMap: Record<string, React.ReactNode> = {
  Coins: <Coins className="h-8 w-8 text-primary" />,
  Heart: <Heart className="h-8 w-8 text-primary" />,
  Users: <Users className="h-8 w-8 text-primary" />,
  Target: <Target className="h-8 w-8 text-primary" />,
}

export function Counter() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 text-white">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-white/10">
                {iconMap[stat.icon]}
              </div>
              <div>
                <p className="text-sm text-white/60">{stat.label}</p>
                <p className="font-heading text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
