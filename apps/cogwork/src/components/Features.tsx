import { Bookmark, Heart, Leaf } from 'lucide-react'

const features = [
  {
    icon: Bookmark,
    title: 'Automotive Parts',
    description:
      'Precision-engineered components designed for peak performance and lasting durability in demanding environments.',
  },
  {
    icon: Heart,
    title: 'Maintenance Services',
    description:
      'Comprehensive maintenance solutions to keep your industrial operations running smoothly and efficiently.',
  },
  {
    icon: Leaf,
    title: 'Green Energy',
    description:
      'Sustainable energy solutions that reduce environmental impact while maximizing operational output.',
  },
]

export function Features() {
  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mb-3">
                <f.icon className="mx-auto text-[#fd5f00]" size={32} />
              </div>
              <h3 className="mb-2 text-xl font-bold">{f.title}</h3>
              <p className="text-[#6c757d]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
