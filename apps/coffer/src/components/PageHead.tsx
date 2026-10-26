import { HEAD } from '../data/accounts'

/** The greeting and one line of context, 32px above the card row. */
export function PageHead() {
  return (
    <header className="mx-auto mb-8 max-w-[1140px]">
      <h1 className="m-0 text-[clamp(28px,3.6vw,40px)] font-bold leading-[normal] tracking-[-.03em]">
        {HEAD.title}
      </h1>
      <p className="mt-[6px] mb-0 text-base text-violet-100">{HEAD.sub}</p>
    </header>
  )
}
