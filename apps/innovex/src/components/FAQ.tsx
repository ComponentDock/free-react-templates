import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const faqItems = [
  {
    question: 'How to fix a problem?',
    answer: [
      'Far far away, behind the word mountains',
      'Consonantia, there live the blind texts',
      'When she reached the first hills of the Italic Mountains',
      'Bookmarksgrove, the headline of Alphabet Village',
      'Separated they live in Bookmarksgrove right',
    ],
  },
  {
    question: 'How to manage your Website?',
    answer: [
      'Far far away, behind the word mountains',
      'Consonantia, there live the blind texts',
      'When she reached the first hills of the Italic Mountains',
      'Bookmarksgrove, the headline of Alphabet Village',
      'Separated they live in Bookmarksgrove right',
    ],
  },
  {
    question: 'How to grow your investments funds?',
    answer: [
      'Far far away, behind the word mountains',
      'Consonantia, there live the blind texts',
      'When she reached the first hills of the Italic Mountains',
      'Bookmarksgrove, the headline of Alphabet Village',
      'Separated they live in Bookmarksgrove right',
    ],
  },
  {
    question: 'What are those requirements for businesses?',
    answer: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    ],
  },
]

const skills = [
  { label: 'Creative Design', percent: 95, color: 'bg-primary-300' },
  { label: 'Product Engineering', percent: 85, color: 'bg-primary-400' },
  { label: 'Marketing Strategy', percent: 95, color: 'bg-primary-500' },
  { label: 'Support Tips', percent: 90, color: 'bg-primary-600' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Skills side */}
          <div className="lg:w-1/2">
            <div
              className="mb-8 aspect-[4/3] w-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://picsum.photos/seed/innovex-faq/800/600')" }}
            />
            <h2 className="mb-8 text-3xl font-bold text-dark">
              We Are Very <br /> Experienced &amp; Professionals
            </h2>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-medium text-dark">{skill.label}</h3>
                    <span className="text-sm text-muted">{skill.percent}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className={cn('h-full rounded-full transition-all duration-500', skill.color)}
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ side */}
          <div className="lg:w-1/2 lg:pl-12">
            <span className="mb-2 block font-script text-xl text-primary-300">
              Frequently Asked Question
            </span>
            <h2 className="mb-8 text-3xl font-bold text-dark">
              Frequently <br /> Ask Question
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={item.question} className="rounded-lg bg-white shadow-sm">
                  <button
                    className="flex w-full items-center justify-between p-4 text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    aria-expanded={openIndex === index}
                  >
                    <span className="font-medium text-dark">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        'shrink-0 text-muted transition-transform',
                        openIndex === index && 'rotate-180',
                      )}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4">
                      <ol className="list-decimal space-y-1 pl-4 text-sm text-gray-600">
                        {item.answer.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
