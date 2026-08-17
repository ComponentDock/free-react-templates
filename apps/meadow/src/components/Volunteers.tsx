import { BrandIcon } from './BrandIcons'
import {
  socialLabels,
  volunteerPosition,
  volunteers,
  volunteersEyebrow,
  volunteersTitle,
} from '../data'

export function Volunteers() {
  return (
    <section id="volunteers" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[13px] font-medium uppercase tracking-[1px] text-brand">
            {volunteersEyebrow}
          </span>
          <h2 className="mt-2 text-4xl font-medium text-ink">{volunteersTitle}</h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {volunteers.map((volunteer) => (
            <article key={volunteer.name} data-testid="staff-card" className="text-center">
              <img
                src={volunteer.image}
                alt={volunteer.name}
                loading="lazy"
                className="mx-auto h-[200px] w-[200px] rounded-full object-cover"
              />
              <div className="relative mx-auto -mt-14 w-[93%] rounded-md bg-white p-6 pt-20 shadow-md">
                <h3 className="text-xl font-medium text-ink">{volunteer.name}</h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand">
                  {volunteerPosition}
                </p>
                <ul className="mt-4 flex justify-center gap-2">
                  {socialLabels.map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        aria-label={label}
                        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-ink"
                      >
                        <BrandIcon label={label} className="h-4 w-4" />
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm leading-relaxed text-body">{volunteer.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
