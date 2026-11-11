import { COMMAND, CTA } from '../data/site'

/**
 * One filled CTA and one terminal line. The chip is a `<p>`, not a button: it
 * is a command to copy by eye, not an action. Its `$` is `aria-hidden` so the
 * accessible text reads "npx virga deploy" rather than "dollar npx …".
 */
export function ActionRow() {
  return (
    <div className="vg-actions">
      <a className="vg-cta" href={CTA.href} target="_blank" rel="noreferrer noopener">
        {CTA.label}
      </a>

      <p className="vg-cmd">
        <span aria-hidden="true">$</span>
        <code>{COMMAND}</code>
      </p>
    </div>
  )
}
