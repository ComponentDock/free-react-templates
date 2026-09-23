import { useState } from 'react'
import {
  Lightbulb,
  FlaskConical,
  BarChart3,
  Palette,
  MousePointer2,
  Cpu,
  Sparkles,
} from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    id: 'strategy',
    label: 'Business Strategy',
    icon: Lightbulb,
    title: 'Business Strategy',
    description:
      'We help you define your business goals, identify opportunities, and create actionable roadmaps for sustainable growth and competitive advantage.',
  },
  {
    id: 'research',
    label: 'Research',
    icon: FlaskConical,
    title: 'Research',
    description:
      'Our research team conducts thorough market analysis, user studies, and competitive assessments to inform data-driven decisions.',
  },
  {
    id: 'data',
    label: 'Data Analysis',
    icon: BarChart3,
    title: 'Data Analysis',
    description:
      'Transform raw data into actionable insights with our advanced analytics, reporting dashboards, and predictive modeling services.',
  },
  {
    id: 'ui',
    label: 'UI Design',
    icon: Palette,
    title: 'UI Design',
    description:
      'Create stunning, intuitive user interfaces that delight your customers and drive engagement through thoughtful visual design.',
  },
  {
    id: 'ux',
    label: 'UX Design',
    icon: MousePointer2,
    title: 'UX Design',
    description:
      'Design seamless user experiences backed by research, testing, and iterative refinement to maximize conversion and satisfaction.',
  },
  {
    id: 'tech',
    label: 'Technology',
    icon: Cpu,
    title: 'Technology',
    description:
      'Leverage cutting-edge technology stacks, cloud infrastructure, and modern development practices to build scalable solutions.',
  },
  {
    id: 'creative',
    label: 'Creative',
    icon: Sparkles,
    title: 'Creative Solution',
    description:
      'Bring your brand to life with creative strategies, visual storytelling, and innovative campaigns that resonate with your audience.',
  },
]

export function Services() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Tab pills */}
          <div className="md:col-span-4">
            <div className="flex flex-col gap-1">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    'flex items-center gap-3 rounded px-4 py-3 text-left text-sm font-medium transition-colors',
                    active === i
                      ? 'bg-ops-400 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100',
                  )}
                >
                  <s.icon className="h-5 w-5 shrink-0" />
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content panel */}
          <div className="flex items-center md:col-span-8">
            <div className="rounded-lg bg-white p-8 shadow-sm md:p-12">
              {(() => {
                const svc = services[active]!
                const Icon = svc.icon
                return (
                  <>
                    <Icon className="mb-4 h-10 w-10 text-ops-400" />
                    <h2 className="mb-4 text-2xl font-bold text-gray-900">{svc.title}</h2>
                    <p className="mb-6 text-gray-600">{svc.description}</p>
                    <a
                      href="#contact"
                      className="inline-block rounded bg-ops-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-ops-500"
                    >
                      Learn More
                    </a>
                  </>
                )
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
