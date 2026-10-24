import { Timer } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { btn } from './action'
import {
  classRows,
  classesHeading,
  classesLabel,
  membershipCard,
  membershipFigure,
  membershipHeading,
  membershipSuffix,
  signupCard,
  signupCopy,
  signupCta,
  signupHeading,
  signupLabel,
} from '../data'

export function ClosingRow() {
  return (
    <section id="classes" aria-label="Classes and membership" className="pb-[100px] pt-[100px]">
      <div className="mx-auto grid max-w-[1170px] items-stretch gap-[30px] px-4 md:grid-cols-3">
        <div className="border-2 border-hairline px-[45px] pb-[45px] pt-[67px]">
          <span className="mb-[10px] block text-[12px] font-black uppercase tracking-[6px] opacity-60">
            {classesLabel}
          </span>
          <h3 className="mb-[45px] text-[18px] font-bold uppercase tracking-[1.5px] text-heading">
            {classesHeading}
          </h3>
          <ul>
            {classRows.map((row, index) => (
              <li
                key={`${row.name}-${index}`}
                className="relative mb-[30px] flex items-center justify-between pl-[26px] text-[14px] text-body"
              >
                <Timer className="absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-brand" aria-hidden="true" />
                <span>{row.name}</span>
                <span>{row.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="relative border-b-[21px] border-l-[24px] border-r-[20px] border-t-[22px] border-brand bg-cover bg-center"
          style={{ backgroundImage: `url(${membershipCard})` }}
        >
          <div className="absolute inset-0 bg-black/55" />
          <div className="relative pb-[40px] pl-[27px] pt-[47px]">
            <span className="mb-[10px] block text-[12px] font-black uppercase tracking-[6px] text-white opacity-60">
              {classesLabel}
            </span>
            <h3 className="mb-[30px] text-[18px] font-bold uppercase tracking-[1.5px] text-white">
              {membershipHeading}
            </h3>
            <p className="text-[72px] font-bold leading-none text-brand">
              {membershipFigure}
              <span className="-ml-[9px] align-baseline text-[15px] font-bold text-white">
                {membershipSuffix}
              </span>
            </p>
          </div>
        </div>

        <div
          className="relative bg-cover bg-center"
          style={{ backgroundImage: `url(${signupCard})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative px-[41px] pb-[45px] pt-[67px]">
            <span className="mb-[10px] block text-[12px] font-black uppercase tracking-[6px] text-white opacity-60">
              {signupLabel}
            </span>
            <h3 className="mb-[30px] text-[18px] font-bold uppercase tracking-[1.5px] text-white">
              {signupHeading}
            </h3>
            <p className="mb-[42px] text-[15px] leading-[30px] text-white">{signupCopy}</p>
            <ButtonLink href="#contact" className={cn(btn.base, btn.filled, btn.full)}>
              {signupCta}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
