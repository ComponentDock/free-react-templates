import { Pizza, Award, Smile, Users } from 'lucide-react'

const stats = [
  { icon: Pizza, value: 100, label: 'Pizza Branches' },
  { icon: Award, value: 85, label: 'Number of Awards' },
  { icon: Smile, value: 10567, label: 'Happy Customers' },
  { icon: Users, value: 50, label: 'Staff' },
] as const

export function Counter() {
  return (
    <section className="relative bg-surface py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/pepperoni-counter/1600/600)' }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 h-10 w-10 text-brand" aria-hidden="true" />
              <div className="mb-1 text-3xl font-bold text-white sm:text-4xl">
                {value.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
