import { Palette, DollarSign, TrendingUp, Heart, Briefcase, PenTool } from 'lucide-react'

const categories = [
  {
    icon: Palette,
    title: 'Design & Creatives',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
  {
    icon: DollarSign,
    title: 'Finance',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
  {
    icon: Heart,
    title: 'Health/Medical',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
  {
    icon: Briefcase,
    title: 'Corporate',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    desc: 'The automated process starts as soon as your clothes go into.',
  },
]

export function Categories() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-brand-dark text-3xl lg:text-5xl font-bold capitalize">
            Browse From Top Categories
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <cat.icon className="text-brand" size={28} />
              </div>
              <h5 className="text-brand-dark text-xl font-bold mb-3">{cat.title}</h5>
              <p className="text-text-muted mb-6">{cat.desc}</p>
              <a
                href="#"
                className="inline-block bg-brand/6 text-brand px-8 py-3 rounded-full text-sm font-bold uppercase hover:bg-brand hover:text-white transition-colors"
              >
                Browse Job
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
