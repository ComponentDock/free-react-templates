import { Users, Heart, CalendarDays, Trophy } from 'lucide-react'

const stats = [
  { icon: Users, number: '1,200', label: 'Trainers' },
  { icon: Heart, number: '8,500', label: 'Members' },
  { icon: CalendarDays, number: '45', label: 'Programs' },
  { icon: Trophy, number: '120', label: 'Awards' },
]

export function Counter() {
  return (
    <section className="relative bg-gray-900 py-20">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/vigor-counter/1920/600)' }}
      />
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map(({ icon: Icon, number, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto mb-3 h-10 w-10 text-brand-400" />
            <p className="text-3xl font-black text-white">{number}</p>
            <p className="text-sm text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
