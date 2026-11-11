/**
 * The whole background, painted by the stylesheet: a five-stop sky, eight
 * gradient stars, one 34vmin sun, three ridge bands whose artwork is an inline
 * SVG data URI, and the grain wash that makes the left column legible. It is
 * one decorative block, so it leaves the accessibility tree as a unit.
 */
export function Scene() {
  return (
    <div className="ap-scene" aria-hidden="true">
      <span className="ap-sky" />
      <span className="ap-stars" />
      <span className="ap-sun" />
      <span className="ap-range ap-range-far" />
      <span className="ap-range ap-range-mid" />
      <span className="ap-range ap-range-near" />
      <span className="ap-grain" />
    </div>
  )
}
