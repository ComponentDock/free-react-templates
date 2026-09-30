import { cn } from '@free-react-templates/ui'

interface NewsletterSidebarProps {
  className?: string
}

export function NewsletterSidebar({ className }: NewsletterSidebarProps) {
  return (
    <aside
      className={cn(
        'w-full shrink-0 bg-brand p-8 text-sidebar-text lg:w-[340px]',
        'border-t lg:border-t-0 lg:border-l border-brand',
        className,
      )}
      aria-label="Newsletter signup sidebar"
    >
      <h2 className="mb-4 text-4xl font-extrabold leading-tight">
        Share Your Article to the World
      </h2>

      <p className="mb-8 text-base leading-relaxed text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissimos vel repudiandae atque
        quia, est dicta quas, pariatur recusandae!
      </p>

      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
        <label htmlFor="sidebar-email" className="sr-only">
          Email address
        </label>
        <input
          id="sidebar-email"
          type="email"
          placeholder="Enter your email"
          required
          className="rounded-md border border-white/20 bg-white px-4 py-3 text-body-text placeholder:text-muted focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        />
        <button
          type="submit"
          className="rounded-md border-2 border-white bg-white px-6 py-3 text-sm font-bold uppercase tracking-widest text-body-text transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Sign Up
        </button>
      </form>
    </aside>
  )
}
