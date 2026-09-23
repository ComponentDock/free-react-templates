import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const items = [
  {
    title: 'Powerful Analytics Dashboard',
    content:
      'Track real-time metrics across all your projects. Visualize trends, set goals, and share reports with your team in seconds.',
  },
  {
    title: 'Seamless Team Collaboration',
    content:
      'Invite teammates, assign roles, and work together in shared workspaces. Built-in comments and notifications keep everyone aligned.',
  },
  {
    title: 'Automated Workflows',
    content:
      'Set up rules that trigger actions automatically. From deployment pipelines to marketing campaigns, automate repetitive tasks and save hours.',
  },
  {
    title: 'Enterprise-Grade Security',
    content:
      'SOC 2 compliant infrastructure with end-to-end encryption. SSO, audit logs, and role-based access control come standard.',
  },
]

export function FeaturesAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section data-testid="features-accordion" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Left — accordion */}
        <div>
          <h2 className="mb-8 text-3xl font-bold font-heading text-gray-900">
            Why choose our platform
          </h2>
          <div className="space-y-4">
            {items.map((item, i) => {
              const isOpen = i === openIndex
              return (
                <div key={item.title} className="border-b">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between py-4 text-left text-lg font-semibold text-gray-900"
                    aria-expanded={isOpen}
                  >
                    {item.title}
                    {isOpen ? (
                      <Minus size={18} className="text-orange-400" />
                    ) : (
                      <Plus size={18} className="text-orange-400" />
                    )}
                  </button>
                  {isOpen && (
                    <p className="pb-4 text-sm leading-relaxed text-body">{item.content}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Right — image */}
        <div>
          <img
            src="https://picsum.photos/seed/nascent-features/600/450"
            alt="Platform features"
            className="w-full rounded object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
