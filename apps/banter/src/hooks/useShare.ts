import { useState } from 'react'

export const COPIED_MESSAGE = 'Link copied to clipboard.'

/**
 * The native sheet is for touch only: a coarse pointer *and* an implementation
 * of `navigator.share`. Everything else copies.
 */
function prefersNativeShare(): boolean {
  const coarse =
    typeof window.matchMedia === 'function' && window.matchMedia('(pointer: coarse)').matches

  return coarse && typeof navigator.share === 'function'
}

export interface Share {
  fallbackUrl: string
  share: () => Promise<void>
  dismiss: () => void
}

/**
 * One post's Share control. The clipboard is the desktop path; a rejection
 * surfaces the URL in a selectable field instead of a message the user cannot
 * copy out of.
 */
export function useShare(url: string, announce: (message: string) => void): Share {
  const [fallbackUrl, setFallbackUrl] = useState('')

  const dismiss = () => setFallbackUrl('')

  const share = async () => {
    if (prefersNativeShare()) {
      try {
        await navigator.share({ url })
      } catch {
        // The user dismissed the sheet — nothing to announce.
      }
      return
    }

    try {
      await navigator.clipboard.writeText(url)
      announce(COPIED_MESSAGE)
    } catch {
      setFallbackUrl(url)
      announce(`Copy this link: ${url}`)
    }
  }

  return { fallbackUrl, share, dismiss }
}
