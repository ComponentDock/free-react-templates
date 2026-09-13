import { LayoutGrid, Code2, Sparkles, SlidersHorizontal } from 'lucide-react'

const features = [
  {
    icon: LayoutGrid,
    title: 'Multiple Layouts',
    description:
      'Choose from a variety of layout options to match your specific plumbing business needs and branding.',
  },
  {
    icon: Code2,
    title: 'Clean Coding',
    description:
      'Built with clean, well-structured code that ensures fast loading times and easy maintenance.',
  },
  {
    icon: Sparkles,
    title: 'Endless Features',
    description:
      'Packed with features designed to help your plumbing business grow and attract more customers.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Fully Customizable',
    description:
      'Every element can be customized to match your brand identity and business requirements.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Background image */}
          <div className="w-full lg:w-1/2">
            <div
              className="h-[400px] rounded-lg bg-cover bg-center lg:h-[500px]"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/pipeflow-features/800/600)',
              }}
            />
          </div>

          {/* Feature cards */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-10 text-3xl font-bold text-gray-900 sm:text-4xl">
              Features That make us Unique
            </h2>

            <div className="space-y-6">
              {features.map((feat) => {
                const Icon = feat.icon
                return (
                  <div key={feat.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-brand-400 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-gray-900">{feat.title}</h3>
                      <p className="text-sm text-gray-600">{feat.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
