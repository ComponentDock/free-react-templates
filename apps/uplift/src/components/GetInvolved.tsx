import { HandHeart, Handshake, Megaphone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    blurb: 'Lend your skills and time — in the field or from home.',
    link: 'Become a Volunteer',
    href: '#contact',
  },
  {
    icon: Megaphone,
    title: 'Fundraise',
    blurb: 'Start a campaign and rally your friends around a cause.',
    link: 'Start Fundraising',
    href: '#donate',
  },
  {
    icon: Handshake,
    title: 'Partner',
    blurb: 'Join us as a corporate or community partner.',
    link: 'Become a Partner',
    href: '#contact',
  },
]

export function GetInvolved() {
  return (
    <section id="get-involved" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Join Our Mission
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            No matter where you are in your journey, there is a way for you to help.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {ways.map((way) => (
            <div
              key={way.title}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/25">
                <way.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-gray-900 dark:text-white">{way.title}</h3>
              <p className="mt-2 flex-1 text-gray-600 dark:text-gray-300">{way.blurb}</p>
              <ButtonLink
                href={way.href}
                className="mt-6 self-start rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700"
              >
                {way.link}
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
