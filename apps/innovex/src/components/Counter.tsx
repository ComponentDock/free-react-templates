import { FileText, Users, Headphones, ThumbsUp } from 'lucide-react'

const stats = [
  { number: '4800', label: 'Project Completed', icon: FileText },
  { number: '1000', label: 'Our Staff', icon: Users },
  { number: '350', label: 'Services Provide', icon: Headphones },
  { number: '7650', label: 'Happy Customers', icon: ThumbsUp },
]

export function Counter() {
  return (
    <section className="relative bg-dark py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://picsum.photos/seed/innovex-counter/1920/400')" }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 text-white">
              <stat.icon size={32} className="shrink-0 text-primary-300" />
              <div>
                <span className="block text-3xl font-bold">{stat.number}</span>
                <span className="text-sm text-gray-300">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
