/**
 * The primary card's art: six shapes — a gold envelope, its flap, a white letter
 * tilted -6 degrees with three blue rules, and a pink check badge.
 */
export function EnvelopeArt() {
  return (
    <svg
      viewBox="0 0 240 200"
      aria-hidden="true"
      className="h-auto w-full max-w-[260px] max-[640px]:max-w-[200px]"
    >
      <rect x="34" y="52" width="172" height="118" rx="14" fill="#fde047" />
      <path
        d="M34 66 120 124l86-58"
        fill="none"
        stroke="#1e3a8a"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <rect
        x="58"
        y="22"
        width="124"
        height="86"
        rx="8"
        fill="#fff"
        transform="rotate(-6 120 65)"
      />
      <path
        d="M78 44h70M78 58h84M78 72h52"
        stroke="#93c5fd"
        strokeWidth="6"
        strokeLinecap="round"
        transform="rotate(-6 120 65)"
      />
      <circle cx="196" cy="44" r="18" fill="#f472b6" />
      <path
        d="m188 44 6 6 10-12"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
