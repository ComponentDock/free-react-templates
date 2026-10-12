import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'
import { scrollTopClass, scrollTopGlyphClass } from '../lib/styles'

/** How far the page has to be scrolled before the control appears. */
export const SHOW_AT = 300

/**
 * The back-to-the-top control: a magenta disc that fades in once the page has been scrolled, and
 * returns the visitor to the invitation. It mounts only while it is wanted, so it never sits in the
 * tab order as an invisible control.
 */
export function ScrollTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AT)
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!visible) {
    return null
  }

  return (
    <button
      type="button"
      className={scrollTopClass}
      aria-label="Back to the top"
      data-testid="scroll-top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      <ArrowUp className={scrollTopGlyphClass} aria-hidden="true" />
    </button>
  )
}
