import { Heart } from 'lucide-react'

/** Faint copyright line fixed at the bottom-left under the sidebar with a
 *  heart and the Component Dock credit; static centered below 768px. */
export function CopyrightBar() {
  const year = new Date().getFullYear()

  return (
    <div className="static border-t border-line bg-paper px-[15px] pb-[50px] pt-[60px] text-center md:fixed md:bottom-0 md:left-0 md:flex md:h-[80px] md:w-[614px] md:items-center md:border-t-0 md:px-[145px] md:pb-0 md:pt-[20px] md:text-left">
      <p className="text-[13px] leading-relaxed text-dim/40">
        Copyright © {year} All rights reserved | Made with{' '}
        <Heart className="inline h-3 w-3 fill-[rgba(204,17,17,0.29)]" aria-hidden="true" /> at{' '}
        <a
          href="https://www.componentdock.com/"
          className="text-dim underline decoration-dim/40 transition-colors hover:text-ink"
        >
          Component Dock
        </a>
      </p>
    </div>
  )
}
