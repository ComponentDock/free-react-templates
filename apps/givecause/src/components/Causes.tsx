import { cn } from '@free-react-templates/ui'

interface CausesProps {
  className?: string
}

const causes = [
  {
    image: 'https://picsum.photos/seed/givecause-cause1/400/300',
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water for communities in need.',
    raised: 12500,
    goal: 20000,
  },
  {
    image: 'https://picsum.photos/seed/givecause-cause2/400/300',
    title: 'Education for All',
    description: 'Supporting educational programs for children in underserved areas.',
    raised: 8700,
    goal: 15000,
  },
  {
    image: 'https://picsum.photos/seed/givecause-cause3/400/300',
    title: 'Medical Aid Program',
    description: 'Delivering essential medical supplies and healthcare to remote regions.',
    raised: 18200,
    goal: 25000,
  },
]

export function Causes({ className }: CausesProps) {
  return (
    <section id="causes" className={cn('py-20 md:py-28 bg-surface', className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-heading mb-4">
            Our Causes
          </h2>
          <p className="font-body text-lg text-body max-w-xl mx-auto">
            Support our ongoing campaigns and help make the world a better place
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img src={cause.image} alt={cause.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl font-medium text-heading mb-2">
                  {cause.title}
                </h3>
                <p className="font-body text-body mb-4">{cause.description}</p>
                <div className="mb-2">
                  <div className="flex justify-between text-sm font-utility text-muted mb-1">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-brand h-2 rounded-full"
                      style={{ width: `${(cause.raised / cause.goal) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
