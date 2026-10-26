import { Flame } from 'lucide-react'

/** The single head line, paired with an asymmetric warm streak pill. */
export function PageHead() {
  return (
    <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h1 className="m-0 text-[clamp(26px,3.4vw,34px)] leading-[normal] font-bold tracking-[-.02em]">
        Continue learning
      </h1>
      <p className="m-0 inline-flex items-center gap-1.5 rounded-full bg-[#fff1e6] py-[7px] pr-[14px] pl-[10px] text-sm font-semibold text-[#9a3412]">
        <Flame
          aria-hidden="true"
          width={18}
          height={18}
          className="flex-none fill-[#f97316] text-[#f97316]"
        />
        6-day streak
      </p>
    </header>
  )
}
