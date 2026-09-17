import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const works = [
  {
    title: 'Vector Illustration',
    description:
      'A comprehensive brand identity system crafted with precision and creative flair for a forward-thinking tech company.',
    image: 'glider-work-1',
  },
  {
    title: 'Brand Strategy',
    description:
      'Strategic visual identity that tells your story through compelling design language and cohesive brand touchpoints.',
    image: 'glider-work-2',
  },
  {
    title: 'Digital Experience',
    description:
      'An immersive web experience combining animation, interaction design, and storytelling for maximum impact.',
    image: 'glider-work-3',
  },
]

export function RemarkableWorks() {
  return (
    <section id="works" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-16 text-center text-3xl font-semibold text-[#222222]">
          Remarkable Works
        </h2>
        <div className="space-y-12">
          {works.map((work, i) => (
            <div
              key={work.title}
              className={cn(
                'flex flex-col items-center gap-8 rounded-[3px] bg-white p-6 shadow-[0px_15px_50px_rgba(0,0,0,0.1)] md:flex-row',
                i % 2 === 1 && 'md:flex-row-reverse',
              )}
            >
              <div className="w-full md:w-7/12">
                <img
                  src={`https://picsum.photos/seed/${work.image}/700/450`}
                  alt={work.title}
                  className="h-64 w-full rounded-[3px] object-cover"
                />
              </div>
              <div className="w-full md:w-5/12">
                <h3 className="mb-4 text-xl font-semibold text-[#222222]">{work.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#777777]">{work.description}</p>
                <a
                  href="#"
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border border-[#3e69fe] px-6 py-2',
                    'text-sm font-medium text-[#3e69fe] transition-all duration-300',
                    'hover:bg-[#3e69fe] hover:text-white',
                  )}
                >
                  View Project
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
