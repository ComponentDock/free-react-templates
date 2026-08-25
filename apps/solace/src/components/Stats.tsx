import { Hotel, Users, Star, Award } from 'lucide-react'

const stats = [
  { icon: Hotel, value: '500+', label: 'Total Rooms' },
  { icon: Users, value: '2,000+', label: 'Happy Guests' },
  { icon: Star, value: '4.9', label: 'Average Rating' },
  { icon: Award, value: '15+', label: 'Awards Won' },
]

export function Stats() {
  return (
    <section className="bg-ink py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon size={32} className="mx-auto text-brand" />
            <p className="mt-3 font-heading text-3xl font-bold text-white">{value}</p>
            <p className="mt-1 text-sm text-white/60">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
