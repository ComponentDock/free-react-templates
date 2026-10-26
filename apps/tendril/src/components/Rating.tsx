import { RATING } from '../data/site'

/**
 * Three ingredients with a hard marker: a dark score chip, five amber stars and
 * a muted sentence. The stars repeat the chip's value visually, so they are
 * hidden from assistive tech and the row reads "4.9 from 38,000 ratings".
 */
export function Rating() {
  return (
    <p className="td-rating">
      <span className="td-score">{RATING.score}</span>
      <span className="td-stars" aria-hidden="true">
        {RATING.stars}
      </span>
      <span>{RATING.count}</span>
    </p>
  )
}
