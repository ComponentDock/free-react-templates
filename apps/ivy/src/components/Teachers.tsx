import { FacebookIcon, InstagramIcon, TwitterIcon } from './social-icons'
import { TEACHERS } from '../data'

const TEACHER_SOCIALS = [FacebookIcon, TwitterIcon, InstagramIcon]

/**
 * Teachers — light-gray section with four staff cards: photo fading into
 * a dark bottom gradient, name, orange position and an orange social
 * icon row.
 */
export function Teachers() {
  return (
    <section id="teachers-section" className="bg-light py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Certified Teachers</h2>
          <p className="mt-4 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEACHERS.map((teacher) => (
            <article key={teacher.name} className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="relative">
                <img src={teacher.avatar} alt={teacher.name} className="w-full" loading="lazy" />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  aria-hidden="true"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-navy transition-colors hover:text-primary">
                  {teacher.name}
                </h3>
                <span className="mt-1 block text-sm font-medium text-primary">
                  {teacher.position}
                </span>
                <p className="mt-2 text-sm text-gray-500">{teacher.blurb}</p>
                <div className="mt-4 flex justify-center gap-2">
                  {TEACHER_SOCIALS.map((Icon, index) => (
                    <a
                      key={index}
                      href="#teachers-section"
                      aria-label={`${teacher.name} on social media`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
