import { subscribe } from '../data'

export function SubscribeBadge() {
  return (
    <a
      href="#subscribe"
      aria-label="Subscribe to my YouTube channel"
      className="absolute -bottom-8 right-6 z-20 flex h-40 w-40 flex-col items-center justify-center gap-1 rounded-full bg-lime text-center shadow-lg transition-transform hover:scale-105 dark:bg-lime-600"
    >
      <img
        src={`https://picsum.photos/seed/${subscribe.seed}/100/100`}
        alt=""
        className="h-14 w-14 rounded-full object-cover"
      />
      <span className="font-script text-2xl font-bold text-ink dark:text-gray-900">
        {subscribe.title}
      </span>
      <span className="px-3 text-[9px] uppercase tracking-[0.15em] text-ink/70 dark:text-gray-800">
        {subscribe.caption}
      </span>
    </a>
  )
}
