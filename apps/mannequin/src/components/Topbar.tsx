import { topbarLinks } from '../data'

/** Dark utility topbar (40px, bg #222): shipping message left,
 *  Help & FAQs / My Account / EN / USD links right. */
export function Topbar() {
  return (
    <div className="flex h-10 items-center justify-between bg-ink px-6 text-[13px] text-white lg:px-16">
      <p className="hidden text-white sm:block">Free shipping for standard order over $100</p>
      <ul className="flex items-center gap-6">
        {topbarLinks.map((link) => (
          <li key={link}>
            <a href="#" className="transition-colors hover:text-brand">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
