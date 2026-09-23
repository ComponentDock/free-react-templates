import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from './social-icons'

const team = [
  { name: 'Lloyd Wilson', role: 'CEO, Founder', seed: 'byteops-team1' },
  { name: 'Rachel Parker', role: 'Web Designer', seed: 'byteops-team2' },
  { name: 'Ian Smith', role: 'Web Developer', seed: 'byteops-team3' },
  { name: 'Alicia Henderson', role: 'Graphic Designer', seed: 'byteops-team4' },
]

const socials = [
  { icon: TwitterIcon, label: 'Twitter' },
  { icon: FacebookIcon, label: 'Facebook' },
  { icon: LinkedinIcon, label: 'LinkedIn' },
  { icon: InstagramIcon, label: 'Instagram' },
]

export function Team() {
  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-ops-400">
            About Us
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Staff</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Meet the talented people behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto mb-4 h-64 w-64 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/256/256`}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
              <p className="mb-3 text-sm text-ops-400">{member.role}</p>
              <div className="flex justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-ops-400 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
