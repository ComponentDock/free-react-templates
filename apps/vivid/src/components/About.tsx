import { Settings, Sparkles, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Settings,
    title: 'Fully Customizable',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
  },
  {
    icon: Sparkles,
    title: 'Awesome Features',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet.',
  },
]

export function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-4xl font-bold text-heading">Welcome to Website</h2>
          <div className="mx-auto mt-5 h-1 w-10 bg-primary" />
        </div>

        {/* Feature cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <feature.icon className="mx-auto mb-5 text-4xl text-primary" size={40} />
              <h3 className="mb-4 text-xl font-bold text-heading">{feature.title}</h3>
              <p className="mb-4 leading-relaxed text-body">{feature.description}</p>
              <a href="#contact" className="text-sm font-semibold text-primary hover:opacity-80">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
