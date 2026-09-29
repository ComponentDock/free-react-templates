import { Search, BarChart3, FileText } from 'lucide-react'

const SERVICES = [
  {
    icon: Search,
    title: 'Site Audit',
    description:
      'Comprehensive technical analysis of your website to identify issues affecting search engine visibility and user experience.',
  },
  {
    icon: BarChart3,
    title: 'Keyword Research',
    description:
      'Strategic keyword discovery and mapping to align your content with what your target audience is actively searching for.',
  },
  {
    icon: FileText,
    title: 'Content Optimization',
    description:
      'Refining on-page elements including meta tags, headings, and content structure to maximize organic search potential.',
  },
]

export function Services() {
  return (
    <section id="service" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Device Related Services</h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <s.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-ink">{s.title}</h3>
              <p className="leading-relaxed text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
