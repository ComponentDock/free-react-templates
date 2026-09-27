import { Search, Home, Users } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Search & Find Apartment',
    description:
      'Browse through our extensive collection of properties and find the perfect apartment that suits your lifestyle and budget.',
  },
  {
    icon: Home,
    title: 'Find Your Room',
    description:
      'Explore detailed listings with photos, virtual tours, and neighborhood information to find your ideal room.',
  },
  {
    icon: Users,
    title: 'Talk To Agent',
    description:
      'Connect with our experienced agents who will guide you through the entire process from search to move-in.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-[#2cbdb8]">Find Your Dream House</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-[#19191a]">How It Work</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-[#2cbdb8]" />
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#2cbdb8]/10">
                <step.icon size={32} className="text-[#2cbdb8]" />
              </div>
              <h3 className="mt-6 font-heading text-lg font-bold text-[#19191a]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
