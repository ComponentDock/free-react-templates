import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const educationItems = [
  {
    title: 'Master Degree Graphic Design',
    description:
      'Advanced studies in visual communication, typography, and brand identity design at the Academy of Art University.',
  },
  {
    title: 'Bachelor Degree of Computer Science',
    description:
      'Comprehensive education in software engineering, algorithms, and web technologies at Stanford University.',
  },
  {
    title: 'Diploma in Information Technology',
    description:
      'Foundation program covering networking, database management, and system administration.',
  },
  {
    title: 'Certificate in Web Development',
    description:
      'Intensive bootcamp program focusing on modern web frameworks, responsive design, and UX principles.',
  },
  {
    title: 'High School Secondary Education',
    description:
      'Strong foundation in mathematics, science, and creative arts with honors recognition.',
  },
]

function AccordionItem({
  title,
  description,
  isOpen,
  onToggle,
}: {
  title: string
  description: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-text-primary transition-colors hover:text-brand"
        aria-expanded={isOpen}
      >
        {title}
        <ChevronDown
          className={cn('h-5 w-5 text-text-muted transition-transform', isOpen && 'rotate-180')}
        />
      </button>
      {isOpen && <div className="pb-4 text-sm text-text-secondary">{description}</div>}
    </div>
  )
}

export function Education() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="education" className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-3xl font-bold text-text-primary">Education</h2>

        <div className="mx-auto max-w-3xl">
          {educationItems.map((item, i) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              description={item.description}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
