import { Heart } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

interface CauseCard {
  title: string
  description: string
  raised: number
  goal: number
  donors: number
  imageId: string
}

const featuredCauses: CauseCard[] = [
  {
    title: 'Education for every child',
    description:
      'Building schools and providing educational resources to children in underserved communities around the world.',
    raised: 1533,
    goal: 2500,
    donors: 90,
    imageId: 'shores-cause-1',
  },
  {
    title: 'Feeding the hungry people',
    description:
      'Providing nutritious meals and food security programs for families facing hunger and malnutrition.',
    raised: 1533,
    goal: 2500,
    donors: 90,
    imageId: 'shores-cause-2',
  },
  {
    title: 'Providing cloth for people',
    description:
      'Distributing clothing and essential supplies to communities affected by natural disasters and poverty.',
    raised: 1533,
    goal: 2500,
    donors: 90,
    imageId: 'shores-cause-3',
  },
]

function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const pct = Math.min((raised / goal) * 100, 100)
  return (
    <div className="mb-2 h-2 w-full rounded-full bg-gray-200">
      <div
        className="h-2 rounded-full bg-brand"
        style={{ width: `${pct}%` }}
        role="progressbar"
        aria-valuenow={raised}
        aria-valuemin={0}
        aria-valuemax={goal}
      />
    </div>
  )
}

export function FeaturedCauses() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-ink">Featured causes</h2>
          <p className="mx-auto max-w-xl text-mist">
            Support our most impactful initiatives and help us reach our fundraising goals.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featuredCauses.map((cause) => (
            <div
              key={cause.title}
              className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={`https://picsum.photos/seed/${cause.imageId}/600/400`}
                alt={cause.title}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-ink">{cause.title}</h3>
                <p className="mb-4 text-sm text-mist">{cause.description}</p>
                <ProgressBar raised={cause.raised} goal={cause.goal} />
                <div className="mb-4 flex justify-between text-sm text-mist">
                  <span>Raised: ${cause.raised.toLocaleString()}</span>
                  <span className="font-semibold text-ink">
                    Goal: ${cause.goal.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="primary" size="sm">
                    Donate
                  </Button>
                  <span className="flex items-center gap-1 text-sm text-mist">
                    <Heart size={14} className="text-brand" />
                    {cause.donors} Donors
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
