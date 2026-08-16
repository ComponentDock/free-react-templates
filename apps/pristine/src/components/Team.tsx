import { Globe } from 'lucide-react'
import { FacebookIcon, TwitterIcon } from './SocialIcons'

const members = [
  {
    name: 'Sharon Needles',
    role: 'Residential Cleaning Expert',
    img: 'https://picsum.photos/seed/pristine-team-1/340/400',
  },
  {
    name: 'John Withawind',
    role: 'Commercial Cleaning Lead',
    img: 'https://picsum.photos/seed/pristine-team-2/340/400',
  },
  {
    name: 'Doug Duckling',
    role: 'Carpet Care Specialist',
    img: 'https://picsum.photos/seed/pristine-team-3/340/400',
  },
  {
    name: 'Buster Hyman',
    role: 'Floor Restoration Expert',
    img: 'https://picsum.photos/seed/pristine-team-4/340/400',
  },
] as const

const socials = [
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'Twitter', icon: TwitterIcon },
  { label: 'Globe', icon: Globe },
] as const

/** Expert team row: photo cards that zoom and reveal three social icon
 *  links on hover, with a navy name (blue on hover) and a role below. */
export function Team() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-medium text-navy lg:text-4xl">Expert Team Members</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article key={member.name} className="group text-center">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="aspect-[340/400] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-4 bg-navy/70 py-3 transition-transform duration-300 group-hover:translate-y-0">
                  {socials.map(({ label, icon: Icon }) => (
                    <a
                      key={label}
                      href="#team"
                      aria-label={`${member.name} ${label}`}
                      className="text-white transition-colors hover:text-accent"
                    >
                      <Icon className="h-5 w-5" label={label} />
                    </a>
                  ))}
                </div>
              </div>
              <h3 className="mt-5 text-[22px] font-medium text-team-name transition-colors group-hover:text-brand">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-team-role">{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
