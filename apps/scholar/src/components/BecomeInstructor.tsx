import { Check, Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const features = [
  'Share your knowledge with thousands of students',
  'Earn money from course sales',
  'Build your personal brand as an expert',
]

export function BecomeInstructor() {
  return (
    <section className="bg-section-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
            Become an Instructor
          </h2>
          <p className="mt-4 text-body">
            Join the world&apos;s largest online learning marketplace. Share your expertise, build
            your audience, and earn revenue while making a difference.
          </p>

          <ul className="mt-6 space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-body">
                <Check className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Button className="rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-600">
              Become an Instructor
            </Button>
            <a
              href="#watch-video"
              className="inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-primary-500"
            >
              <Play className="h-5 w-5 text-primary-500" aria-hidden="true" />
              Watch Video
            </a>
          </div>
        </div>

        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/scholar-instructor/600/400"
            alt="Instructor teaching online"
            className="w-full rounded-xl object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
