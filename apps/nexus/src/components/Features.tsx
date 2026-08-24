import { PenTool, Headphones, ThumbsUp, Code2, Compass, BookOpen } from 'lucide-react'

const FEATURES = [
  { title: 'Illustration', icon: PenTool },
  { title: '24/7 Support', icon: Headphones },
  { title: 'Easy to use', icon: ThumbsUp },
  { title: 'Web development', icon: Code2 },
  { title: 'Intuitive', icon: Compass },
  { title: 'Documentation', icon: BookOpen },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-text">Features</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group p-6 text-center transition-all hover:shadow-md"
              >
                <Icon className="mx-auto mb-4 h-10 w-10 text-brand-pink" />
                <h3 className="text-lg font-semibold text-text">{feature.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
