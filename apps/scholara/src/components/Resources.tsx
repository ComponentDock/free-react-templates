import { ChevronRight } from 'lucide-react'

const RESOURCES = [
  {
    title: 'First Year Students',
    description:
      'Everything you need to know about starting your journey — from orientation to course selection and campus resources.',
  },
  {
    title: 'Tuition & Fees',
    description:
      'Transparent breakdown of tuition costs, financial aid options, scholarships, and payment plans available to all students.',
  },
  {
    title: 'International Students',
    description:
      'Guidance on visas, accommodation, language support, and cultural integration programs for our global community.',
  },
]

export function Resources() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 lg:px-8">
        {/* Text side */}
        <div>
          <h2 className="mb-8 text-3xl font-black uppercase text-ink md:text-4xl">
            Essential Resources
          </h2>
          <div className="flex flex-col gap-6">
            {RESOURCES.map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                  <ChevronRight size={20} className="text-brand" />
                </div>
                <p className="mt-2 text-sm text-mist">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image side */}
        <div className="overflow-hidden">
          <img
            src="https://picsum.photos/seed/scholara-resources/600/500"
            alt="Students studying in the library"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
