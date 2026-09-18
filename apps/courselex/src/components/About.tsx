import { Button } from '@free-react-templates/ui'

export function About() {
  return (
    <section id="about" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 sm:flex-row sm:px-6">
        {/* Image */}
        <div className="w-full sm:w-1/2">
          <img
            src="https://picsum.photos/seed/courselex-about/600/400"
            alt="Students collaborating in a modern classroom"
            className="w-full rounded-lg object-cover shadow-md"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="w-full sm:w-1/2">
          <h2 className="font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
            Over 2500 Courses from 5 Platforms
          </h2>
          <p className="mt-4 leading-relaxed text-brand-body">
            We bring together the best courses from the world's top learning platforms into one
            searchable directory. Whether you're looking to pick up a new skill, advance your
            career, or explore a passion, Courselex helps you find the perfect course — fast.
          </p>
          <Button variant="primary" className="mt-6 rounded-[5px]">
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  )
}
