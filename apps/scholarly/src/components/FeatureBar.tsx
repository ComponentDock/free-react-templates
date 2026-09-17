import { BookOpen, GraduationCap, Trophy, Users } from 'lucide-react'

const FEATURES = [
  { icon: Users, label: 'Campus Life' },
  { icon: GraduationCap, label: 'Graduation' },
  { icon: Trophy, label: 'Athletics' },
  { icon: BookOpen, label: 'Community' },
]

export function FeatureBar() {
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {FEATURES.map((feature) => (
          <div key={feature.label} className="flex flex-col items-center gap-3 text-center">
            <feature.icon className="h-10 w-10 text-primary-400" strokeWidth={1.5} />
            <span className="text-sm font-medium text-ink">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
