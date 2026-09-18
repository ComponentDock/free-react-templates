import { Button } from '@free-react-templates/ui'
import { Search, Star, CalendarCheck } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Find Businesses',
    desc: 'Discover and connect with great local businesses in your neighborhood like restaurants, shops, and more.',
    Icon: Search,
  },
  {
    num: '02',
    title: 'Review Listings',
    desc: 'Read reviews, check ratings, and compare options to find the perfect place for any occasion.',
    Icon: Star,
  },
  {
    num: '03',
    title: 'Make a Reservation',
    desc: 'Book your spot instantly with just a few taps. No phone calls needed, no waiting required.',
    Icon: CalendarCheck,
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-r from-brand/10 to-brand/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="mb-4 text-4xl font-light text-heading">How It Works</h2>
            <p className="max-w-xl text-text-body">
              Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
            </p>
          </div>
          <Button variant="primary" size="lg">
            Explore Listing
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-brand text-2xl font-bold text-white">
                {step.num}
              </div>
              <div>
                <h5 className="mb-2 text-lg font-semibold text-text-dark">{step.title}</h5>
                <p className="text-sm text-text-body">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
