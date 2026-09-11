import { Compass, Code, Palette, MessageSquare } from 'lucide-react'

interface CapabilityProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Capability({ icon, title, description }: CapabilityProps) {
  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center gap-3">
        <span className="text-brand">{icon}</span>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      <p className="mb-2 text-sm text-gray-400">{description}</p>
      <a href="#" className="text-sm text-brand hover:underline">
        Read More
      </a>
    </div>
  )
}

const CAPABILITIES: CapabilityProps[] = [
  {
    icon: <Compass size={24} />,
    title: 'Strategy',
    description: 'Data-driven strategies that align digital initiatives with business goals.',
  },
  {
    icon: <Code size={24} />,
    title: 'Web Development',
    description: 'Modern, performant web applications built with cutting-edge technologies.',
  },
  {
    icon: <Palette size={24} />,
    title: 'Art Direction',
    description: 'Visual storytelling that communicates your brand identity effectively.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Copywriting',
    description: 'Compelling content that engages audiences and drives conversions.',
  },
]

export function DarkFeatureStrip() {
  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-5/12">
            <img
              src="https://picsum.photos/seed/forgeit-about/600/400"
              alt="Our approach"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:w-7/12">
            {CAPABILITIES.map((cap) => (
              <Capability key={cap.title} {...cap} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
