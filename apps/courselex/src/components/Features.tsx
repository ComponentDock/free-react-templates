import { cn } from '@free-react-templates/ui'
import { Crown, Briefcase, Medal, Key, FileText, Headphones } from 'lucide-react'

const features = [
  {
    icon: Crown,
    title: 'Architecture',
    desc: 'Well-structured courses built on proven learning frameworks and pedagogy.',
  },
  {
    icon: Briefcase,
    title: 'Interior Design',
    desc: 'Beautifully presented content that keeps learners engaged from start to finish.',
  },
  {
    icon: Medal,
    title: 'Concept Design',
    desc: 'Creative approaches that transform complex topics into intuitive lessons.',
  },
  {
    icon: Key,
    title: 'Lifetime Access',
    desc: 'Once enrolled, revisit course materials anytime — your learning never expires.',
  },
  {
    icon: FileText,
    title: 'Source File Included',
    desc: 'Downloadable resources, templates, and source files with every course.',
  },
  {
    icon: Headphones,
    title: 'Live Support',
    desc: 'Get help when you need it with dedicated instructor and community support.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
          Features That Make Us Hero
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feat) => {
            const Icon = feat.icon
            return (
              <div
                key={feat.title}
                className={cn(
                  'flex flex-col items-center rounded-lg bg-brand-light p-6 text-center shadow-sm',
                  'transition-shadow hover:shadow-md',
                )}
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-grad-start to-teal-grad-end text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-brand-dark">{feat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-body">{feat.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
