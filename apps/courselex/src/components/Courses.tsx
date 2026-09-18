import { cn } from '@free-react-templates/ui'
import { BookOpen } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const categories = [
  'Development',
  'IT & Software',
  'Photography',
  'Language',
  'Life Science',
  'Business',
  'Social Science',
  'Data Science',
  'Design',
  'Training',
  'Humanities',
  'Marketing',
  'Economics',
  'Personal Dev',
]

export function Courses() {
  return (
    <section id="courses" className="bg-brand-light py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Left text */}
          <div className="w-full lg:w-5/12">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
              This is Why We have Solid Idea
            </h2>
            <p className="mt-4 text-brand-body">
              Our curated approach means we only surface courses that meet high standards of
              quality, relevance, and learner satisfaction.
            </p>
            <Button
              variant="outline"
              className="mt-6 rounded-[5px] border-white bg-white text-brand-dark hover:bg-gray-50"
            >
              View All Courses
            </Button>
          </div>

          {/* Right categories */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {categories.map((cat) => (
                <a
                  key={cat}
                  href={`#course-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  className={cn(
                    'flex items-center gap-2 rounded-[5px] bg-white px-4 py-3 text-sm font-medium text-brand-dark shadow-sm',
                    'transition-all hover:bg-teal-grad-start hover:text-white',
                  )}
                >
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span>{cat}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
