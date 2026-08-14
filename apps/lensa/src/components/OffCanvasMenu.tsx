import { X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { menuLinks, socialLinks } from '../data'
import { BrandIcon, type BrandIconProps } from './BrandIcon'

export interface OffCanvasMenuProps {
  open: boolean
  onClose: () => void
}

/** Slide-in off-canvas navigation: near-black panel with a close control,
 *  six large white nav links (Home active) and the social brand icons. */
export function OffCanvasMenu({ open, onClose }: OffCanvasMenuProps) {
  return (
    <div
      aria-hidden={!open}
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-[614px] max-w-full bg-ink text-white transition-transform duration-300',
        open ? 'translate-x-0' : '-translate-x-full',
      )}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute right-[45px] top-[40px] text-white transition-opacity hover:opacity-70"
      >
        <X className="h-[30px] w-[30px]" aria-hidden="true" />
      </button>
      <nav
        aria-label="Main menu"
        className="flex h-full flex-col px-[60px] pt-[160px] md:px-[185px]"
      >
        <ul className="space-y-1">
          {menuLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onClose}
                aria-current={link.active ? 'true' : undefined}
                className={cn(
                  'relative inline-block py-1 text-[30px] text-white transition-opacity hover:opacity-80',
                  'after:absolute after:-bottom-1 after:left-0 after:h-[3px] after:w-[30px] after:bg-white',
                  link.active ? 'after:opacity-100' : 'after:opacity-0 hover:after:opacity-100',
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-[50px] flex items-center gap-[30px]">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="text-[18px] text-white transition-opacity hover:opacity-80"
            >
              <BrandIcon
                name={social.name.toLowerCase() as BrandIconProps['name']}
                className="h-[18px] w-[18px]"
              />
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}
