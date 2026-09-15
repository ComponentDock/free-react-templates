import { Heart, TrendingUp, Award, Users } from 'lucide-react'

const stats = [
  { icon: Heart, label: 'Total Donation', value: '$12,426' },
  { icon: TrendingUp, label: 'Fund Raised', value: '$8,750' },
  { icon: Award, label: 'Highest Donation', value: '$3,200' },
  { icon: Users, label: 'Total Donors', value: '1,847' },
] as const

export function DonationStats() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-4">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="border border-border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <Icon className="mx-auto mb-4 h-10 w-10 text-brand" aria-hidden="true" />
            <h3 className="mb-2 text-2xl font-bold text-text-primary">{value}</h3>
            <p className="text-sm text-text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
