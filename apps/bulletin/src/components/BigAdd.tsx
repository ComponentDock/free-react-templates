import { bigAddLabel } from '../data'

/** Full-width advertisement placeholder below the top news grid
    (reference: .big-add-area mb-100). */
export function BigAdd() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-[100px]">
      <div className="flex h-28 items-center justify-center border border-hairline bg-mist">
        <p className="text-sm font-bold tracking-widest text-ash uppercase">{bigAddLabel}</p>
      </div>
    </div>
  )
}
