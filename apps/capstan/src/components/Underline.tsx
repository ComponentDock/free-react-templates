import { underlineClass } from '../lib/styles'

export interface UnderlineProps {
  /** True on the row the page is already on, which keeps its underline out at rest. */
  current: boolean
}

/**
 * The accent underline: a `1px` teal bar covering its row's full width at `bottom:-1px`,
 * painted behind the row's label and wiped in from the left on hover. Only the wide
 * presentation draws one — the design disables these underlines outright inside the
 * collapsing panel. It is decorative throughout: the row's own colour and `aria-current`
 * are what carry the meaning.
 */
export function Underline({ current }: UnderlineProps) {
  return <span aria-hidden="true" className={underlineClass(current)} />
}
