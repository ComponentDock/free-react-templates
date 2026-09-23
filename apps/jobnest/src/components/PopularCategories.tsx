import {
  Palette,
  TrendingUp,
  Users,
  HeadphonesIcon,
  DollarSign,
  GraduationCap,
  Briefcase,
  HeartPulse,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = [
  { name: 'Design & Creative', positions: 50, icon: Palette, color: 'bg-blue-100 text-blue-600' },
  { name: 'Marketing', positions: 75, icon: TrendingUp, color: 'bg-green-100 text-green-600' },
  { name: 'Administration', positions: 30, icon: Users, color: 'bg-purple-100 text-purple-600' },
  {
    name: 'Customer Service',
    positions: 45,
    icon: HeadphonesIcon,
    color: 'bg-orange-100 text-orange-600',
  },
  { name: 'Finance', positions: 25, icon: DollarSign, color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Teaching', positions: 40, icon: GraduationCap, color: 'bg-pink-100 text-pink-600' },
  {
    name: 'Human Resources',
    positions: 35,
    icon: Briefcase,
    color: 'bg-indigo-100 text-indigo-600',
  },
  { name: 'Healthcare', positions: 60, icon: HeartPulse, color: 'bg-red-100 text-red-600' },
]

export function PopularCategories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-text-primary">
          Popular Categories
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.name}
                className="cursor-pointer rounded border border-border-light bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-lg"
              >
                <div className={cn('mb-4 inline-flex rounded-full p-3', cat.color)}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-text-primary">{cat.name}</h3>
                <p className="text-sm text-text-muted">{cat.positions} Available position</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
