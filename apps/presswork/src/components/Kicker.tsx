import { KICKER } from '../data/site'

/**
 * Three uppercase runs. The `/` between them belongs to the *following* span
 * (`span + span::before`), which is why the visible space either side of a slash
 * is the flex gap plus the slash's own margin.
 */
export function Kicker() {
  return (
    <p className="pw-kicker">
      {KICKER.map((run) => (
        <span key={run}>{run}</span>
      ))}
    </p>
  )
}
