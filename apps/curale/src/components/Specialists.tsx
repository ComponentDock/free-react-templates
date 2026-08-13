import { doctors } from '../data'
import { socialIcons } from './social-icons'

/** "Our Specialists" grid on a #f9f9fd background: four doctor cards with
 *  a photo, a name/role bar (#f9f9fd → brand gradient + white text on
 *  hover) and a white blurb panel with social icon links. */
export function Specialists() {
  return (
    <section id="doctors" className="bg-surface py-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[30px] font-bold text-ink md:text-[36px]">Our Specialists</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Green above he cattle god saw day multiply under fill in the cattle fowl a all, living,
            tree word link available in the service for subdue fruit.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.name} className="group">
              <div className="overflow-hidden">
                <img
                  src={doctor.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/4.5] w-full object-cover"
                />
              </div>
              <div className="bg-surface-alt p-5 text-center shadow-[0_0_5px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-[#244cfd] group-hover:to-[#15e4fd]">
                <h3 className="text-[18px] font-bold uppercase text-ink transition-colors duration-500 group-hover:text-white">
                  {doctor.name}
                </h3>
                <h6 className="mt-1 text-[13px] font-medium uppercase text-body transition-colors duration-500 group-hover:text-white">
                  {doctor.role}
                </h6>
              </div>
              <div className="bg-white p-5 text-center">
                <p className="mb-4 text-[15px] leading-relaxed text-body">{doctor.copy}</p>
                <ul className="flex items-center justify-center gap-4">
                  {socialIcons.slice(0, 4).map(({ label, Icon }) => (
                    <li key={label}>
                      <a
                        href="#"
                        aria-label={label}
                        className="text-body transition-colors hover:text-brand"
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
