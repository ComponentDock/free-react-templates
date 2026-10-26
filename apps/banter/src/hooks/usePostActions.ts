import { useCallback, useState } from 'react'
import { formatCount } from '../lib/format'

export interface PostActions {
  liked: boolean
  count: number
  label: string
  toggle: () => void
}

/**
 * One post's like state. The count and the pressed flag move together, so a
 * like is `count + 1` and an unlike is `count - 1` — never a drift between the
 * two. `label` is the formatted string; `count` stays raw for `data-count`.
 */
export function usePostActions(initialCount: number, initiallyLiked: boolean): PostActions {
  const [state, setState] = useState({ liked: initiallyLiked, count: initialCount })

  const toggle = useCallback(() => {
    setState((previous) =>
      previous.liked
        ? { liked: false, count: previous.count - 1 }
        : { liked: true, count: previous.count + 1 },
    )
  }, [])

  return { liked: state.liked, count: state.count, label: formatCount(state.count), toggle }
}
