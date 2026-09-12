import { Leaf, Lightbulb, AlertTriangle, ThumbsUp } from 'lucide-react'

const items = [
  {
    icon: Leaf,
    title: 'Green Energy',
    description: 'Sustainable power solutions for modern industry.',
  },
  {
    icon: Lightbulb,
    title: 'Precision Mechanics',
    description: 'Advanced engineering with exact tolerances.',
  },
  {
    icon: AlertTriangle,
    title: 'Construction Machines',
    description: 'Heavy-duty equipment for large-scale projects.',
  },
  {
    icon: ThumbsUp,
    title: 'Reliable and Stable',
    description: 'Consistent performance you can count on.',
  },
]

export function Engineering() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          We Are Reliable Engineering In House
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="w-full md:w-1/3">
            <img
              src="https://picsum.photos/seed/cogwork-eng/600/400"
              alt="Engineering facility"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:w-2/3">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4">
                <item.icon className="mt-1 shrink-0 text-[#fd5f00]" size={32} />
                <div>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-[#6c757d]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
