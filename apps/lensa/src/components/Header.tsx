import { Menu } from 'lucide-react'
import { socialLinks } from '../data'
import { BrandIcon, type BrandIconProps } from './BrandIcon'

export interface HeaderProps {
  onMenuToggle: () => void
}

/** White top bar: hamburger toggle on the left opening the off-canvas menu,
 *  five social brand icon links on the right (hidden below 480px). */
export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-40 flex items-center justify-between bg-paper px-[45px] py-[27px]">
      <button
        type="button"
        onClick={onMenuToggle}
        aria-label="Open menu"
        className="text-nav transition-opacity hover:opacity-70"
      >
        <Menu className="h-7 w-7" aria-hidden="true" />
      </button>
      <div className="flex items-center gap-[30px] text-ink max-[479px]:hidden">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="text-[18px] transition-opacity hover:opacity-70"
          >
            <BrandIcon
              name={social.name.toLowerCase() as BrandIconProps['name']}
              className="h-[18px] w-[18px]"
            />
          </a>
        ))}
      </div>
    </header>
  )
}
