import { Clock } from 'lucide-react'
import {
  classes,
  classesEyebrow,
  classesTitle,
  membershipDiscount,
  membershipDiscountLabel,
  membershipEyebrow,
  membershipTitle,
  signUpButtonLabel,
  signUpDescription,
  signUpEyebrow,
  signUpTitle,
} from '../data'

export function UpcomingEvents() {
  return (
    <section id="events-section" className="bg-white py-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 lg:grid-cols-3">
        {/* Upcoming classes schedule */}
        <div className="border-2 border-line px-8 pb-12 pt-16 lg:px-10">
          <p className="text-xs font-black uppercase tracking-[6px] text-dark/60">
            {classesEyebrow}
          </p>
          <h3 className="mt-3 text-lg font-bold uppercase tracking-[1.5px] text-dark">
            {classesTitle}
          </h3>
          <ul className="mt-10 space-y-8">
            {classes.map((entry) => (
              <li
                key={`${entry.name}-${entry.time}`}
                className="flex items-center justify-between gap-4 text-sm text-muted"
              >
                <span className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-muted" aria-hidden="true" />
                  {entry.name}
                </span>
                <span className="font-medium text-dark">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Membership card */}
        <div
          className="relative border-t-[22px] border-l-[24px] border-b-[21px] border-r-[20px] border-brand bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/ironpulse-bg3/640/900)' }}
        >
          <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
          <div className="relative px-7 pb-10 pt-12">
            <p className="text-xs font-black uppercase tracking-[6px] text-white/70">
              {membershipEyebrow}
            </p>
            <h3 className="mt-3 text-lg font-bold uppercase tracking-[1.5px] text-dark">
              {membershipTitle}
            </h3>
            <div className="mt-10">
              <span className="text-[72px] font-bold leading-none text-brand">
                {membershipDiscount}
              </span>
              <span className="mt-4 block text-[15px] font-bold uppercase tracking-[1.5px] text-dark">
                {membershipDiscountLabel}
              </span>
            </div>
          </div>
        </div>

        {/* Personal trainer sign-up */}
        <div
          className="relative bg-cover bg-center px-9 pb-12 pt-16"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/ironpulse-darkbg5/640/900)' }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          <div className="relative">
            <p className="text-xs font-black uppercase tracking-[6px] text-white/60">
              {signUpEyebrow}
            </p>
            <h3 className="mt-3 text-lg font-bold uppercase tracking-[1.5px] text-white">
              {signUpTitle}
            </h3>
            <p className="mt-6 text-[15px] leading-[30px] text-white/80">{signUpDescription}</p>
            <a
              href="#footer-section"
              className="mt-10 inline-block bg-brand px-[50px] py-5 text-sm font-bold uppercase tracking-[1.5px] text-white transition-colors hover:bg-dark"
            >
              {signUpButtonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
