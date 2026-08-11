import { X } from 'lucide-react'
import {
  asideCloseLabel,
  drawerLabel,
  drawerNavLabel,
  drawerPosts,
  followLabel,
  navLinks,
  recentHeading,
  siteName,
  socialLabel,
  socialLinks,
} from '../data'
import { PostWidget } from './PostWidget'
import { SocialIcon } from './SocialIcon'

interface AsideDrawerProps {
  open: boolean
  onClose: () => void
}

/* Reference `#nav-aside` off-canvas drawer: stacked nav links, a "Recent
   Posts" widget list (thumbnail + title rows), a "Follow us" social block
   and a close control. */
export function AsideDrawer({ open, onClose }: AsideDrawerProps) {
  if (!open) return null

  return (
    <div
      id="nav-aside"
      role="dialog"
      aria-label={drawerLabel}
      aria-modal="true"
      className="fixed inset-y-0 right-0 z-[100] w-80 max-w-[85vw] overflow-y-auto border-l border-line bg-white shadow-2xl"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <span className="font-heading text-lg font-bold uppercase tracking-wide text-ink">
          {siteName}
        </span>
        <button
          type="button"
          aria-label={asideCloseLabel}
          onClick={onClose}
          className="text-ink transition-colors hover:text-brand"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <nav aria-label={drawerNavLabel} className="px-5 py-4">
        <ul className="flex flex-col">
          {navLinks.map((link) => (
            <li key={link.label} className="border-b border-line/60">
              <a
                href={link.href}
                onClick={onClose}
                className="block py-3 text-[15px] font-semibold text-ink transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <section aria-label={recentHeading} className="px-5 py-4">
        <h3 className="mb-4 font-heading text-base font-bold capitalize text-ink">
          {recentHeading}
        </h3>
        <div className="flex flex-col gap-4">
          {drawerPosts.map((post) => (
            <PostWidget key={post.id} post={post} />
          ))}
        </div>
      </section>
      <section aria-label={followLabel} className="px-5 py-4">
        <h3 className="mb-4 font-heading text-base font-bold text-ink">{followLabel}</h3>
        <ul aria-label={socialLabel} className="flex gap-3">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded bg-line/60 text-ink transition-colors hover:bg-brand hover:text-white"
              >
                <SocialIcon name={social.name} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
