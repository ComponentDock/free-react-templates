import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const panels = [
  {
    id: 'mission',
    title: 'Our Mission',
    content:
      'To provide exceptional healthcare services that improve the quality of life for every patient we serve, with compassion, integrity, and excellence.',
  },
  {
    id: 'vision',
    title: 'Our Vision',
    content:
      'To be the leading healthcare provider known for innovative medical solutions, patient-centered care, and a commitment to community health.',
  },
  {
    id: 'why',
    title: 'Why Choose Us',
    content:
      'With over 30 years of experience, state-of-the-art facilities, and a team of world-class doctors, we deliver personalized care that makes a real difference.',
  },
] as const

export function About() {
  const [openPanel, setOpenPanel] = useState<string | null>('mission')

  const toggle = (id: string) => {
    setOpenPanel(openPanel === id ? null : id)
  }

  return (
    <section id="about" className="py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Accordion */}
        <div>
          <h2 className="mb-8 text-3xl font-bold text-ink-900">About CureNova</h2>
          <div className="space-y-4">
            {panels.map((panel) => (
              <div key={panel.id} className="overflow-hidden rounded-lg border border-gray-200">
                <button
                  onClick={() => toggle(panel.id)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-semibold text-ink-900 hover:bg-gray-50"
                  aria-expanded={openPanel === panel.id}
                >
                  {panel.title}
                  {openPanel === panel.id ? (
                    <ChevronUp className="h-5 w-5 text-mute-600" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-mute-600" aria-hidden="true" />
                  )}
                </button>
                {openPanel === panel.id && (
                  <div className="px-6 pb-4 text-sm text-mute-600">{panel.content}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://picsum.photos/seed/curenova-about/600/450"
            alt="About CureNova medical center"
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
