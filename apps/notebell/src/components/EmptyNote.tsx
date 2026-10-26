import { MESSAGES } from '../data'

/** Shown below the toast once the last card is archived. */
export function EmptyNote() {
  return <p className="m-0 mt-6 text-center text-muted">{MESSAGES.empty}</p>
}
