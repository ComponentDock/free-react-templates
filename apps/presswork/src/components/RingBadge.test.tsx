import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { RingBadge } from './RingBadge'
import { BADGE } from '../data/site'

describe('RingBadge', () => {
  it('is decorative — hidden from assistive tech and not focusable', () => {
    const { container } = render(<RingBadge />)
    const badge = container.querySelector('.pw-badge')

    expect(badge).toHaveAttribute('aria-hidden', 'true')
    expect(badge?.querySelector('[tabindex]')).toBeNull()
    expect(badge?.querySelector('a, button')).toBeNull()
  })

  it('sets the availability sentence on a radius-46 path', () => {
    const { container } = render(<RingBadge />)
    const path = container.querySelector('defs path')
    const textPath = container.querySelector('textPath')

    expect(path?.getAttribute('d')).toContain('a46 46 0 1 1 92 0')
    expect(textPath).toHaveAttribute('href', '#pw-ring')
    expect(textPath?.textContent).toContain('Booking projects for spring 2027')
    expect(textPath?.textContent).toBe(BADGE.ring)
  })

  it('draws the arrow over the ring, beside exactly one svg', () => {
    const { container } = render(<RingBadge />)

    expect(container.querySelectorAll('svg')).toHaveLength(1)
    expect(container.querySelector('svg')).toHaveAttribute('viewBox', '0 0 120 120')
    expect(container.querySelector('.pw-badge-arrow')).toHaveTextContent(BADGE.arrow)
  })
})
