type BrandName = 'facebook' | 'x' | 'instagram' | 'linkedin' | 'youtube' | 'tiktok'

interface BrandIconProps {
  name: BrandName
  className?: string
}

const paths: Record<BrandName, string> = {
  facebook: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
  x: 'M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M13.232 10.768L20 4',
  instagram:
    'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2m-.2 2A3.6 3.6 0 004 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5M12 7a5 5 0 110 10 5 5 0 010-10m0 2a3 3 0 100 6 3 3 0 000-6z',
  linkedin:
    'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z',
  youtube:
    'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z',
  tiktok:
    'M16.6 5.82A4.28 4.28 0 0113.2 4h-3a5 5 0 005 5v3a5 5 0 01-5-5h.1A5.5 5.5 0 0118 12.5V5h-3v1.82A3.18 3.18 0 0112.18 10H11V7.5a7.5 7.5 0 00-7.5 7.5v3A7.5 7.5 0 0111 15v-2.5h1.18A5.68 5.68 0 0116.6 5.82z',
}

export function BrandIcon({ name, className }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}

export type { BrandName, BrandIconProps }
