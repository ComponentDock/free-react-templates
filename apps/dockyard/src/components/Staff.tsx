import { staff } from '../data'
import { SocialIcon } from './SocialIcon'

const socialNetworks = ['Twitter', 'Facebook', 'Instagram']

/** Three bordered member cards with circular portraits and square blue social buttons. */
export function Staff() {
  return (
    <section id="staff" aria-label="Our staff" className="bg-white py-[5em]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="mx-auto mb-[5em] max-w-[66%] text-center">
          <h2 className="text-[32px] font-medium text-brand normal-case lg:text-[48px]">
            Our Staff
          </h2>
          <p className="mt-4 text-[16px] text-body">
            Three of the people who answer the desk — ocean bookings, customs entries and the
            tracking line.
          </p>
        </div>

        <ul className="grid gap-[30px] lg:grid-cols-3">
          {staff.map((member) => (
            <li
              key={member.name}
              className="rounded-[4px] border border-line p-[30px] text-center"
            >
              <img
                src={member.avatar}
                alt={member.name}
                width={400}
                height={400}
                loading="lazy"
                className="mx-auto size-[130px] rounded-full object-cover"
              />
              <h3 className="mt-6 text-[20px] font-medium text-ink normal-case">{member.name}</h3>
              <p className="mt-1 text-[12px] tracking-[0.1em] text-muted uppercase">{member.role}</p>
              <p className="mt-4 text-[16px] text-body">{member.blurb}</p>
              <ul className="mt-6 flex items-center justify-center gap-2">
                {socialNetworks.map((network) => (
                  <li key={`${member.name}-${network}`}>
                    <a
                      href="#contact"
                      aria-label={`${member.name} on ${network}`}
                      className="flex size-[30px] items-center justify-center rounded-[4px] border-2 border-brand bg-brand text-white transition-colors hover:bg-brand-dark"
                    >
                      <SocialIcon network={network} className="size-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
