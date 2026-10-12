export type FlourishVariant = 'rule' | 'eyebrow' | 'laurel' | 'corner'

interface Ornament {
  viewBox: string
  paths: string[]
}

/**
 * The design's ornaments are PNG flourishes (a 439×17 rule under every section title, a 36×45 mark
 * beside the hero eyebrow, an 80×84 laurel between the couple's names, a 108×61 corner spray in the
 * gallery captions). Redrawing them here keeps the shapes and the scale while copying no asset: each
 * one is a handful of filled paths on the variant's own viewBox.
 */
const ORNAMENTS: Record<FlourishVariant, Ornament> = {
  rule: {
    viewBox: '0 0 439 17',
    paths: [
      'M0 7.5h170v2H0z',
      'M269 7.5h170v2H269z',
      'M219.5 0l8.5 8.5-8.5 8.5-8.5-8.5z',
      'M241 5l3.5 3.5-3.5 3.5-3.5-3.5z',
      'M198 5l3.5 3.5-3.5 3.5-3.5-3.5z',
    ],
  },
  eyebrow: {
    viewBox: '0 0 36 45',
    paths: [
      'M17 45h2V12h-2z',
      'M18 12c-5.5-2.5-8.5-7-6.5-12 5.5 2 8.5 6.5 6.5 12z',
      'M18 12c5.5-2.5 8.5-7 6.5-12-5.5 2-8.5 6.5-6.5 12z',
      'M18 21c-6-2.5-9-7-7-12 5.5 2 8.5 7 7 12z',
      'M18 21c6-2.5 9-7 7-12-5.5 2-8.5 7-7 12z',
      'M18 31c-6-2.5-9-7-7-12 5.5 2 8.5 7 7 12z',
      'M18 31c6-2.5 9-7 7-12-5.5 2-8.5 7-7 12z',
    ],
  },
  laurel: {
    viewBox: '0 0 80 84',
    paths: [
      'M40 84C25 69 11 54 7 28c9 4 15 12 19 23 6-14 10-25 14-35 4 10 8 21 14 35 4-11 10-19 19-23-4 26-18 41-33 56z',
      'M40 70c-6-7-11-15-13-25 5 3 9 9 11 15 3-7 5-13 7-19 2 6 4 12 7 19 2-6 6-12 11-15-2 10-7 18-13 25z',
    ],
  },
  corner: {
    viewBox: '0 0 108 61',
    paths: [
      'M2 59C24 50 40 33 46 6M46 6c8 12 18 20 32 26 8 4 18 7 28 9-11 7-25 11-41 11-22 0-40 2-63 7z',
      'M46 6c-3 9-9 17-17 23 6-2 12-6 17-11z',
    ],
  },
}

export function Flourish({ variant, className }: { variant: FlourishVariant; className: string }) {
  const ornament = ORNAMENTS[variant]

  return (
    <svg
      className={className}
      viewBox={ornament.viewBox}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {ornament.paths.map((path) => (
        <path key={path} d={path} />
      ))}
    </svg>
  )
}
