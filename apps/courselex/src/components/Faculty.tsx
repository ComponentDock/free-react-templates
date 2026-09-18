import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const faculty = [
  {
    name: 'Dr. Sarah Mitchell',
    designation: 'Data Science Lead',
    bio: 'Former ML engineer at top tech firms with 12+ years of experience in data analytics.',
    photo: 'https://picsum.photos/seed/courselex-faculty1/300/300',
  },
  {
    name: 'James Rodriguez',
    designation: 'Full-Stack Instructor',
    bio: 'Passionate educator teaching React, Node.js, and modern web development patterns.',
    photo: 'https://picsum.photos/seed/courselex-faculty2/300/300',
  },
  {
    name: 'Emily Chen',
    designation: 'UX Design Expert',
    bio: 'Award-winning designer who has shaped products used by millions worldwide.',
    photo: 'https://picsum.photos/seed/courselex-faculty3/300/300',
  },
  {
    name: 'Michael Okafor',
    designation: 'Business Strategy Prof.',
    bio: 'MBA from Harvard, teaches entrepreneurship, marketing, and business growth.',
    photo: 'https://picsum.photos/seed/courselex-faculty4/300/300',
  },
]

const socialIcons = [
  { Icon: FacebookIcon, label: 'Facebook' },
  { Icon: TwitterIcon, label: 'Twitter' },
  { Icon: LinkedinIcon, label: 'LinkedIn' },
]

export function Faculty() {
  return (
    <section id="faculty" className="bg-brand-light py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-heading text-2xl font-semibold text-brand-dark sm:text-3xl">
          Faculty Members
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {faculty.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="p-5 text-center">
                <h3 className="font-heading text-lg font-semibold text-brand-dark">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-teal-grad-start">
                  {member.designation}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-brand-body">{member.bio}</p>
                <div className="mt-3 flex justify-center gap-3">
                  {socialIcons.map(({ Icon, label }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-light text-brand-body transition-colors hover:bg-teal-grad-start hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
