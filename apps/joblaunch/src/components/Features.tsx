import { Search, MapPin, Briefcase, Users, Settings, Star } from 'lucide-react'

interface FeatureItem {
  icon: React.ReactNode
  title: string
  description: string
}

const features: FeatureItem[] = [
  {
    icon: <Search size={28} />,
    title: 'Search Millions of Jobs',
    description: 'Access a vast database of job listings from top employers across all industries.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Location Search',
    description: 'Find jobs near you or search opportunities in your dream city worldwide.',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Top Careers',
    description: 'Explore curated career paths in the most in-demand fields today.',
  },
  {
    icon: <Users size={28} />,
    title: 'Search Expert Candidates',
    description: 'Employers can find pre-vetted, top-tier candidates for their open roles.',
  },
  {
    icon: <Settings size={28} />,
    title: 'Easy To Manage Jobs',
    description: 'Simple dashboard to post, edit, and manage all your job listings.',
  },
  {
    icon: <Star size={28} />,
    title: 'Online Reviews',
    description: 'Read authentic reviews from employees to make informed career decisions.',
  },
]

export function Features() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-ink text-center mb-12">Why JobLaunch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-ink mb-3">{feature.title}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
