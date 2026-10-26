import { HEAD } from '../content'

/**
 * The band's head: a wrapping flex bar with the title block on the left and the
 * range chip bottom-aligned on the right. The chip drops to its own line when
 * the head's content box can no longer hold both — flex-wrap arithmetic, never
 * a media query.
 */
export function BandHead() {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="m-0 text-[28px] font-bold leading-[normal] tracking-[-.02em]">{HEAD.title}</h1>
        <p className="mb-0 mt-1 text-[15px] leading-[normal] text-[#475569]">{HEAD.sub}</p>
      </div>
      <p className="m-0 inline-flex items-center gap-2 rounded-[10px] border border-[#d8dee8] bg-white px-[14px] py-[9px] text-[14px] font-medium leading-[normal] text-[#334155]">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 fill-none stroke-current"
          strokeWidth={2}
          strokeLinecap="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
        {HEAD.range}
      </p>
    </header>
  )
}
