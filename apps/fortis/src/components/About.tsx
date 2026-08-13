import { ButtonLink } from '@free-react-templates/ui'
import { skills } from '../data'

/** About split in three columns: "About Us" text + solid green "Our works"
 *  pill, a centered photo, and "Our expertise and skills" with four green
 *  progress bars (7px tall, square corners). */
export function About() {
  return (
    <section id="about" className="py-10 md:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-4 md:grid-cols-3 md:gap-8 md:px-8">
        <div>
          <h2 className="mb-4 text-2xl font-medium text-black">About Us</h2>
          <p className="mb-4">
            Fortis is a small studio of designers and engineers who believe great websites come from
            great collaboration. We pair sharp strategy with meticulous craft.
          </p>
          <p className="mb-6">
            From first sketch to final launch, we keep our process transparent and our clients close
            — so the site you get is the site you imagined.
          </p>
          <ButtonLink href="#works" variant="primary" className="rounded-full px-10">
            Our works
          </ButtonLink>
        </div>

        <div>
          <img
            src="https://picsum.photos/id/180/800/1000"
            alt="The Fortis design studio at work"
            className="w-full object-cover"
          />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-medium text-black">Our expertise and skills</h2>
          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-2 flex items-center justify-between text-sm font-bold text-black">
                  <span>{skill.label}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div
                  role="progressbar"
                  aria-label={skill.label}
                  aria-valuenow={skill.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="h-[7px] w-full rounded-none bg-[#e9ecef]"
                >
                  <div className="h-full bg-brand" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
