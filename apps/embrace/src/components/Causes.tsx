import { Calendar } from 'lucide-react'

interface CauseProps {
  image: string
  raised: string
  goal: string
  percent: number
  title: string
  timeLeft: string
  description: string
}

function CauseCard({ image, raised, goal, percent, title, timeLeft, description }: CauseProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <figure className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition hover:scale-105"
          loading="lazy"
        />
      </figure>
      <div className="p-6">
        {/* Progress bar */}
        <div className="mb-4 h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Raised / Goal */}
        <div className="mb-4 flex justify-between text-sm">
          <span className="text-gray-500">
            Raised: <span className="font-bold text-ink">{raised}</span>
          </span>
          <span className="text-gray-500">
            Goal: <span className="font-bold text-ink">{goal}</span>
          </span>
        </div>

        <h3 className="text-lg font-bold text-ink mb-2">{title}</h3>
        <div className="mb-3 flex items-center gap-1.5 text-xs text-gray-400">
          <Calendar className="h-3.5 w-3.5" />
          <span>{timeLeft}</span>
        </div>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <a
          href="#donate"
          className="inline-block rounded bg-ink px-5 py-2 text-xs font-bold text-white uppercase tracking-wider transition hover:bg-gray-800"
        >
          Donate Now!
        </a>
      </div>
    </div>
  )
}

const causes: CauseProps[] = [
  {
    image: 'https://picsum.photos/seed/cause-food/600/400',
    raised: '$49,112',
    goal: '$50,000',
    percent: 98,
    title: 'Help Children To Get Food',
    timeLeft: '2 hours remaining',
    description:
      'Provide nutritious meals to children in underserved communities. Your donation helps us reach those who need it most.',
  },
  {
    image: 'https://picsum.photos/seed/cause-health/600/400',
    raised: '$28,127',
    goal: '$30,000',
    percent: 94,
    title: 'Help Children To Get Health',
    timeLeft: '7 days remaining',
    description: 'Fund medical checkups and healthcare access for children in remote areas.',
  },
  {
    image: 'https://picsum.photos/seed/cause-education/600/400',
    raised: '$21,973',
    goal: '$100,000',
    percent: 22,
    title: 'Help Children To Get Education',
    timeLeft: '15 days remaining',
    description:
      'Support school supplies, teacher training, and educational infrastructure for underserved communities.',
  },
]

export function Causes() {
  return (
    <section id="causes" className="py-24 bg-white mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Most Popular Causes</h2>
          <p className="max-w-2xl mx-auto text-gray-500">
            Together we can make a lasting impact. Every contribution counts toward building a
            better future for children in need.
          </p>
        </div>

        {/* Cause cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <CauseCard key={cause.title} {...cause} />
          ))}
        </div>

        <p className="mt-12 text-center text-gray-500">
          Save the future for the little children by donating.{' '}
          <a href="#causes" className="font-bold text-primary hover:text-primary-600 transition">
            See all causes
          </a>
        </p>
      </div>
    </section>
  )
}
