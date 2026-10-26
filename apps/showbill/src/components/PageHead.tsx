import { HEAD } from '../data/events'

/** One line of head copy over the grid, left-aligned, one line down to 320. */
export function PageHead() {
  return (
    <header className="mb-7">
      <h1 className="m-0 text-[clamp(30px,4vw,44px)] leading-[1.05] font-extrabold tracking-[-.03em] text-neutral-900">
        {HEAD.title}
      </h1>
      <p className="mt-2 mb-0 text-base leading-[17px] text-neutral-600">{HEAD.sub}</p>
    </header>
  )
}
