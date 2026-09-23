import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'

const companies = [
  { name: 'Google', positions: 25, initial: 'G', color: 'bg-blue-100 text-blue-600' },
  { name: 'Apple', positions: 18, initial: 'A', color: 'bg-gray-100 text-gray-600' },
  { name: 'Meta', positions: 22, initial: 'M', color: 'bg-indigo-100 text-indigo-600' },
  { name: 'Amazon', positions: 30, initial: 'A', color: 'bg-orange-100 text-orange-600' },
  { name: 'Microsoft', positions: 20, initial: 'M', color: 'bg-green-100 text-green-600' },
  { name: 'Netflix', positions: 15, initial: 'N', color: 'bg-red-100 text-red-600' },
  { name: 'Spotify', positions: 12, initial: 'S', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Adobe', positions: 10, initial: 'A', color: 'bg-pink-100 text-pink-600' },
]

export function TopCompanies() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-text-primary">Top Companies</h2>
          <Button
            variant="outline"
            size="sm"
            className="border-brand text-brand hover:bg-brand hover:text-white"
          >
            Browse More Job
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="cursor-pointer rounded bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-shadow hover:shadow-lg"
            >
              <div
                className={cn(
                  'mb-4 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold',
                  company.color,
                )}
              >
                {company.initial}
              </div>
              <h3 className="mb-1 font-semibold text-text-primary">{company.name}</h3>
              <p className="text-sm text-text-muted">{company.positions} Open Positions</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
