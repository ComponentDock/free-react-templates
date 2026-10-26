import { AVATARS, HEADLINE, HEADLINE_ID, ISSUE_PILL, LEDE, READERS } from '../data/site'
import { IssueStack } from './IssueStack'
import { SignupForm } from './SignupForm'

/**
 * One section, one screen: the copy column on the left — issue pill, the
 * balance-wrapped headline, the lede, the signup and the reader proof — and the
 * rotated issue stack on the right. The section is labelled by its own `h1`, the
 * page's only one.
 *
 * The pill, the headline and the reader row are private to this file: they are
 * three fragments of one measured column, not reusable sections.
 */
export function Hero() {
  return (
    <section className="ep-hero" aria-labelledby={HEADLINE_ID}>
      <div className="ep-copy">
        <p className="ep-tag">
          <span className="ep-dot" aria-hidden="true" />
          {ISSUE_PILL}
        </p>

        <h1 className="ep-title" id={HEADLINE_ID}>
          {HEADLINE.lead} <em>{HEADLINE.accent}</em>
        </h1>

        <p className="ep-sub">{LEDE}</p>

        <SignupForm />

        <div className="ep-readers">
          <span className="ep-faces" aria-hidden="true">
            {AVATARS.map((avatar) => (
              <span key={avatar.initials} className={`ep-face ep-face--${avatar.tone}`}>
                {avatar.initials}
              </span>
            ))}
          </span>
          <span>
            {READERS.lead} <strong>{READERS.count}</strong>
            {READERS.tail}
          </span>
        </div>
      </div>

      <IssueStack />
    </section>
  )
}
