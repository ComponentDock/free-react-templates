import { LAWYERS, SOCIAL_LINKS } from '../data'
import { SocialIcon } from './SocialIcon'

/**
 * Lawyers — "Our Lawyers" section (source `.our_loyers`): three centered
 * cards, each with a portrait photo, the 24px ink name, a 16px #727272 role
 * and three 35×35 gold-on-cream (#FEF7E7) 10px-rounded social icon links.
 */
export function Lawyers() {
  return (
    <section aria-label="Our Lawyers" className="bg-paper py-24 lg:py-[120px]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <h3 className="font-heading text-[32px] leading-[48px] font-bold text-ink lg:text-[42px]">
            Our Lawyers
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-base text-section-sub">
            A team of advocates who combine courtroom grit with a client-first approach.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {LAWYERS.map((lawyer) => (
            <div key={lawyer.name} className="text-center">
              <img
                src={lawyer.image}
                alt={`Portrait of ${lawyer.name}`}
                className="mx-auto aspect-[400/460] w-full max-w-[400px] object-cover"
              />
              <h4 className="mt-7 mb-1.5 font-body text-2xl font-bold text-ink">{lawyer.name}</h4>
              <span className="block text-base text-section-sub">{lawyer.role}</span>
              <ul className="mt-5 flex justify-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${lawyer.name} on ${social.label}`}
                      className="flex h-[35px] w-[35px] items-center justify-center rounded-[10px] bg-cream-chip text-brand transition-colors hover:bg-brand hover:text-paper"
                    >
                      <SocialIcon name={social.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
