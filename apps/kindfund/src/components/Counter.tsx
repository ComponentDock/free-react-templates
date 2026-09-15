import { Coins, Users, Target, Heart } from 'lucide-react'
import { stats } from '../data'

const iconMap: Record<string, React.ReactNode> = {
  Coins: <Coins className="h-8 w-8 text-white" />,
  Users: <Users className="h-8 w-8 text-white" />,
  Target: <Target className="h-8 w-8 text-white" />,
  Heart: <Heart className="h-8 w-8 text-white" />,
}

export function Counter() {
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/kindfund-counter/1400/400)' }}
    >
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center text-white">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white/20">
                {iconMap[stat.icon]}
              </div>
              <p className="font-heading text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
