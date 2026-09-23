import { Search, Users, Trophy, UserCheck } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Search Millions of Jobs',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Users,
    title: 'Easy To Manage Jobs',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Trophy,
    title: 'Top Careers',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: UserCheck,
    title: 'Search Expert Candidates',
    desc: 'A small river named Duden flows by their place and supplies.',
  },
]

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <s.icon size={28} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
