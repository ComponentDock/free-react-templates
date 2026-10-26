import { cn } from '@free-react-templates/ui'
import { POSTS } from './data'
import { PageFooter } from './components/PageFooter'
import { PostCard } from './components/PostCard'
import { useToast } from './hooks/useToast'

/**
 * Banter — a community feed on a cool warm-grey desk. Two posts sit in an
 * auto-fit grid with `items-start`, so they stay deliberately unequal (a
 * 613.25 px photo post beside a 358.25 px link post) and the pair becomes one
 * column below 894 without a width media query. No nav, no hero and no visible
 * heading: the only `h1` is for screen readers.
 */
export function App() {
  const { message, announce } = useToast()

  return (
    <main className="mx-auto w-full max-w-[1132px] bg-ground px-4 py-[clamp(28px,5vw,64px)]">
      <h1 className="sr-only">Community feed</h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-start gap-[22px]">
        {POSTS.map((post) => (
          <PostCard key={post.id} post={post} announce={announce} />
        ))}
      </div>

      <PageFooter />

      <p
        role="status"
        className={cn(
          'fixed bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-ink px-4 py-2.5 text-[14px] font-medium text-white shadow-[0_12px_28px_-12px_rgb(0_0_0/0.5)] transition-opacity duration-200',
          message === '' ? 'pointer-events-none p-0 opacity-0' : 'opacity-100',
        )}
      >
        {message}
      </p>
    </main>
  )
}
