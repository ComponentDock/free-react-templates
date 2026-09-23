import { BookOpen, Bookmark, FileText, Type, ImageIcon, AlignLeft } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Hard Cover',
    description: 'Premium quality hardcover edition built to last through countless readings.',
  },
  {
    icon: Bookmark,
    title: 'Paper Back',
    description: 'Lightweight paperback edition perfect for reading on the go.',
  },
  {
    icon: FileText,
    title: 'E-Book',
    description: 'Digital edition available for instant download on any device.',
  },
  {
    icon: Type,
    title: 'Big Text',
    description: 'Large print edition for comfortable reading experience.',
  },
  {
    icon: ImageIcon,
    title: 'Illustrated',
    description: 'Beautifully illustrated with stunning artwork throughout.',
  },
  {
    icon: AlignLeft,
    title: 'Readable Text',
    description: 'Carefully typeset for optimal readability and enjoyment.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-light-section py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 font-[Oswald] text-3xl font-bold uppercase tracking-wide text-gray-900 sm:text-4xl">
            Features Of This Book
          </h2>
          <p className="text-gray-500">
            Available in multiple formats to suit your reading preference. Each edition is crafted
            with care for the best reading experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-primary/10 text-blue-primary transition-colors group-hover:bg-blue-primary group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
