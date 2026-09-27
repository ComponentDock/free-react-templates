import { DollarSign, BookOpen, Users } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: '$2.5M', label: 'Total Donations' },
  { icon: BookOpen, value: '1,465', label: 'Total Projects' },
  { icon: Users, value: '3,965', label: 'Total Volunteers' },
]

export function Welcome() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/dwellpoint-welcome/600/450"
              alt="Welcome to Dwellpoint"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Welcome to Dwellpoint Center</h2>
            <p className="mb-8 leading-relaxed text-gray-500">
              We are dedicated to helping you find the perfect property. Our experienced team guides
              you through every step — from browsing listings to closing the deal on your dream
              home.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="text-center">
                  <Icon className="mx-auto mb-2 h-8 w-8 text-crimson-400" />
                  <h3 className="text-xl font-bold text-gray-800">{value}</h3>
                  <p className="text-sm text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
