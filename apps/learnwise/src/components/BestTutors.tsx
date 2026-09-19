import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const tutors = [
  {
    name: 'Alex Parker',
    bio: 'Experienced educator with a passion for making complex topics accessible to all learners.',
    image: 'https://picsum.photos/seed/learnwise-tutor1/200/200',
  },
  {
    name: 'Maria Johnson',
    bio: 'Specializing in creative writing and literature with over a decade of teaching experience.',
    image: 'https://picsum.photos/seed/learnwise-tutor2/200/200',
  },
  {
    name: 'James Wilson',
    bio: 'Dedicated mathematics tutor who believes every student can excel with the right guidance.',
    image: 'https://picsum.photos/seed/learnwise-tutor3/200/200',
  },
  {
    name: 'Sophie Chen',
    bio: 'Language instructor fluent in five languages, bringing global perspectives to the classroom.',
    image: 'https://picsum.photos/seed/learnwise-tutor4/200/200',
  },
  {
    name: 'David Brown',
    bio: 'Science educator committed to hands-on learning and real-world applications.',
    image: 'https://picsum.photos/seed/learnwise-tutor5/200/200',
  },
]

const socialIcons = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'Twitter', Icon: TwitterIcon },
]

export function BestTutors() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const amount = 300
    scrollRef.current?.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section id="tutors" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h3 className="mb-12 text-center font-heading text-3xl font-bold text-gray-800">
          The Best Tutors in Town
        </h3>
        <div className="relative">
          <button
            aria-label="Previous tutor"
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none' }}
          >
            {tutors.map((t) => (
              <div key={t.name} className="min-w-[220px] flex-shrink-0 text-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="mx-auto mb-4 h-40 w-40 rounded-full object-cover"
                  loading="lazy"
                />
                <h5 className="mb-1 text-base font-bold text-gray-800">{t.name}</h5>
                <span className="mb-2 block text-xs font-semibold uppercase text-primary">
                  Teacher
                </span>
                <p className="mb-3 text-sm leading-relaxed text-gray-500">{t.bio}</p>
                <div className="flex justify-center gap-3">
                  {socialIcons.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      aria-label={s.label}
                      className="text-gray-400 hover:text-primary"
                    >
                      <s.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button
            aria-label="Next tutor"
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
