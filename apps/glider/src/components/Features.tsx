import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const features = [
  {
    title: 'Creative Design',
    description:
      'We push boundaries with innovative visual solutions that capture attention and communicate your brand story effectively.',
    image: 'glider-feature-1',
  },
  {
    title: 'Appropriate UX',
    description:
      'User-centered design thinking ensures every interaction is intuitive, accessible, and delightful for your audience.',
    image: 'glider-feature-2',
  },
  {
    title: 'Super Clean Code',
    description:
      'Our development team delivers performant, maintainable, and scalable code built with modern best practices.',
    image: 'glider-feature-3',
  },
]

export function Features() {
  return (
    <section id="services" className="bg-gradient-to-b from-[#3e69fe] to-[#4cd4e3] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-semibold text-white">
          Our Exclusive Features
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="overflow-hidden rounded-[3px] bg-white shadow-lg">
              <img
                src={`https://picsum.photos/seed/${feature.image}/400/250`}
                alt={feature.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="mb-3 text-lg font-semibold text-[#222222]">{feature.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#777777]">{feature.description}</p>
                <a
                  href="#"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border border-[#3e69fe] px-6 py-2',
                    'text-sm font-medium text-[#3e69fe] transition-all duration-300',
                    'hover:bg-[#3e69fe] hover:text-white',
                  )}
                >
                  Read More
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
