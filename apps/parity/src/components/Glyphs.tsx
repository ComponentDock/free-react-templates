/**
 * The three marks the table draws itself: a filled tick, a thin cross and the
 * group chevron. No icon package and no imagery — the page has zero `<img>` and
 * these are the only `<svg>`s on it.
 */

/** Included: a filled teal circle with a white check. */
export function Tick() {
  return (
    <svg
      className="pt-ic pt-ic--yes"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx={10} cy={10} r={10} />
      <path
        d="M5.8 10.3l2.8 2.8 5.6-6"
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Not included: a two-stroke cross, painted in the repaired cross token. */
export function Cross() {
  return (
    <svg
      className="pt-ic pt-ic--no"
      viewBox="0 0 20 20"
      width={20}
      height={20}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M6.5 6.5l7 7m0-7l-7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  )
}

/** The group toggle's chevron; it rotates a quarter turn when the group closes. */
export function Chevron() {
  return (
    <svg
      className="pt-chev"
      viewBox="0 0 20 20"
      width={18}
      height={18}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 7.5l5 5 5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
