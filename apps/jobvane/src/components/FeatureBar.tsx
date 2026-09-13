import { Search, Briefcase, TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Search Millions of Jobs',
    desc: 'Find the right job opportunity from thousands of listings across every industry.',
  },
  {
    icon: Briefcase,
    title: 'Easy To Manage Jobs',
    desc: 'Post and manage your job listings with an intuitive dashboard and tools.',
  },
  {
    icon: TrendingUp,
    title: 'Top Careers',
    desc: 'Explore top career paths and discover opportunities that match your skills.',
  },
  {
    icon: Users,
    title: 'Search Expert Candidates',
    desc: 'Connect with qualified candidates and build your dream team faster.',
  },
]

export function FeatureBar() {
  return (
    <section className="bg-primary-400 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="text-center text-white">
            <Icon className="mx-auto mb-4 h-12 w-12" />
            <h3 className="mb-2 text-lg font-bold">{title}</h3>
            <p className="text-sm text-white/80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
