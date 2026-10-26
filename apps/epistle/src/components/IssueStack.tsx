import { CARD, ISSUE_ITEMS, STICKER } from '../data/site'

/**
 * The hero's second column: three 399 × 420 cards — yellow at +7°, blue at −5°
 * and the white issue card at −1° with an 8 × 8 px ink offset shadow — plus the
 * mint "Free forever" disc at +12°. Hovering settles the front card upright and
 * six pixels up.
 *
 * The whole stack is decorative (`aria-hidden`): every claim it makes is already
 * in the copy column, so a screen reader loses nothing by skipping it. The
 * artwork keeps `flex: none` and the card a `min-height`, which is why the issue
 * illustration stays 110 px instead of collapsing as the card narrows.
 */
export function IssueStack() {
  return (
    <div className="ep-stack" aria-hidden="true">
      <div className="ep-card ep-card--b" />
      <div className="ep-card ep-card--c" />

      <article className="ep-card ep-card--a">
        <div className="ep-mail-head">
          <span className="ep-mail-avatar">{CARD.badge}</span>
          <span className="ep-mail-heading">
            <strong>{CARD.name}</strong>
            <span>{CARD.meta}</span>
          </span>
        </div>

        <p className="ep-mail-title">{CARD.title}</p>

        <div className="ep-mail-art">
          <span />
          <span />
          <span />
        </div>

        <ul className="ep-mail-list">
          {ISSUE_ITEMS.map((item) => (
            <li key={item.n}>
              <b>{item.n}</b>
              {item.text}
            </li>
          ))}
        </ul>
      </article>

      <span className="ep-sticker">
        {STICKER[0]}
        <br />
        {STICKER[1]}
      </span>
    </div>
  )
}
