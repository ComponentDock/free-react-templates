import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const educationItems = [
  {
    title: 'Master Degree Graphic Design',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Bachelor Degree of Computer Science',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    title: 'Diploma in Information Technology',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'Certificate in Web Development',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    title: 'High School Secondary Education',
    content:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function Education() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="education" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <span className="text-sm font-medium text-brand uppercase tracking-wider">Education</span>
        <h2 className="text-3xl font-bold text-text-primary mt-2 mb-10">Education</h2>

        <div className="space-y-3">
          {educationItems.map((item, i) => (
            <div
              key={item.title}
              className="border border-border rounded-lg overflow-hidden bg-bg-primary"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-text-primary hover:bg-bg-secondary transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                aria-expanded={openIndex === i}
              >
                {item.title}
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-text-muted transition-transform duration-200',
                    openIndex === i && 'rotate-180',
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4 text-sm text-text-secondary">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
