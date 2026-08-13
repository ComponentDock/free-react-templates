import { team } from '../data'
import { teamSocial } from './social-icons'

/** White "Our Specialist" team grid: three doctor cards with a photo,
 *  name, role and four circular social icons; the caption turns blue with
 *  white text on hover. */
export function Team() {
  return (
    <section className="bg-white py-24 md:py-[110px]">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-[600px] text-center">
          <span className="inline-flex items-center gap-5 text-[18px] font-bold uppercase text-[#396cf0]">
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
            {team.kicker}
            <span className="h-[2px] w-[50px] bg-[#396cf0]" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-[40px] font-extrabold leading-tight text-ink md:text-[50px]">
            {team.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {team.members.map((member) => (
            <article key={member.name} className="group">
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="border border-t-0 border-[#ffeff9] bg-white p-[30px] pb-8 pl-[50px] transition-colors group-hover:bg-[#0f66f8]">
                <h3 className="text-[25px] font-bold text-[#161e46] transition-colors group-hover:text-white">
                  {member.name}
                </h3>
                <span className="mb-8 mt-1 block text-[14px] font-light text-[#a5a5a5] transition-colors group-hover:text-white">
                  {member.role}
                </span>
                <ul className="flex gap-3">
                  {teamSocial.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        aria-label={label}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#fff5fb] text-[#9fa8c3] transition-colors group-hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
