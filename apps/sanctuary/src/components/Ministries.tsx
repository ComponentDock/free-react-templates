import { Baby, Flame, Globe, Heart, Music, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Ministry {
  name: string
  description: string
  leader?: string
  when?: string
  icon: LucideIcon
}

const ministries: Ministry[] = [
  {
    name: "Children's Ministry",
    description:
      "Age-appropriate programs for infants through 5th grade, helping kids discover God's love through fun, interactive lessons.",
    leader: 'Sarah Johnson',
    when: 'Sundays during services',
    icon: Baby,
  },
  {
    name: 'Youth Ministry',
    description:
      'A community for middle and high school students to grow in faith, build friendships, and make a difference.',
    leader: 'Pastor Mike Davis',
    when: 'Fridays 6:30 PM',
    icon: Flame,
  },
  {
    name: 'Small Groups',
    description:
      'Connect with others in a smaller setting for Bible study, prayer, and authentic community. Groups meet throughout the week.',
    when: 'Various times',
    icon: Users,
  },
  {
    name: 'Worship Team',
    description:
      'Use your musical gifts to lead our congregation in worship. Auditions held quarterly.',
    leader: 'David Chen',
    when: 'Thursdays 7:00 PM',
    icon: Music,
  },
  {
    name: 'Outreach & Missions',
    description:
      'Serve locally and globally through community service projects, mission trips, and partner support.',
    leader: 'Pastor Rachel Kim',
    icon: Globe,
  },
  {
    name: 'Care Ministry',
    description:
      'Providing practical support to those in need through meals, visits, prayer, and encouragement.',
    leader: 'Linda Martinez',
    icon: Heart,
  },
]

export function Ministries() {
  return (
    <section id="ministries" className="py-20 lg:py-28 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            Get Connected
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Find your place in our church family through one of our ministries
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ministries.map((ministry) => {
            const Icon = ministry.icon
            return (
              <div key={ministry.name} className="rounded-2xl bg-gray-50 p-8 dark:bg-gray-800">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-100">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-gray-900 dark:text-white">
                  {ministry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {ministry.description}
                </p>
                <div className="mt-4 space-y-1 text-sm">
                  {ministry.leader ? (
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Leader:</span>{' '}
                      <span>{ministry.leader}</span>
                    </p>
                  ) : null}
                  {ministry.when ? (
                    <p className="text-gray-500 dark:text-gray-400">
                      <span className="font-medium text-gray-700 dark:text-gray-300">When:</span>{' '}
                      <span>{ministry.when}</span>
                    </p>
                  ) : null}
                </div>
                <a
                  href="#ministries"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
                >
                  Learn More
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#ministries"
            className="inline-flex items-center gap-1 font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            View All Ministries
          </a>
        </div>
      </div>
    </section>
  )
}
