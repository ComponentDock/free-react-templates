import { Button } from '@free-react-templates/ui'

export function AboutSplit() {
  return (
    <section id="about" className="bg-section-bg">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/scholar-about/600/400"
            alt="Students collaborating on online courses"
            className="w-full rounded-xl object-cover"
            width={600}
            height={400}
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <h2 className="font-display text-2xl font-bold text-heading sm:text-3xl">
            The world&apos;s largest selection of online courses
          </h2>
          <p className="mt-4 text-body">
            Choose from over 100,000 online video courses with new additions published every month.
            Our platform partners with top universities and industry experts to bring you the
            highest quality content.
          </p>
          <Button className="mt-6 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-600">
            Browse Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
