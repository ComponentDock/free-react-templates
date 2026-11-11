import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { estimateFor } from '../pricing'
import { BillBar } from './BillBar'

describe('BillBar', () => {
  it('paints four segments in the order of the breakdown', () => {
    const { container } = render(<BillBar cost={estimateFor(4, 4, false).cost} />)

    const segments = container.querySelectorAll('.rr-seg')
    expect(segments).toHaveLength(4)
    expect([...segments].map((segment) => segment.getAttribute('data-segment'))).toEqual([
      'base',
      'calls',
      'storage',
      'support',
    ])
    expect(container.querySelector('.rr-bar')).toHaveAttribute('aria-hidden', 'true')
  })

  it('grows each segment by its raw dollars, not by a percentage', () => {
    const { container } = render(<BillBar cost={estimateFor(4, 4, false).cost} />)

    const grows = [...container.querySelectorAll<HTMLElement>('.rr-seg')].map((segment) =>
      Number(segment.style.flexGrow),
    )
    expect(grows).toEqual([25, 9, expect.closeTo(5.4, 10), 0])
  })

  it('leaves the support segment at zero width until the toggle is on', () => {
    const on = estimateFor(4, 4, true)
    const { container, rerender } = render(<BillBar cost={on.cost} />)

    const support = container.querySelector<HTMLElement>('.rr-seg--support')
    expect(support?.style.flexGrow).toBe('149')

    rerender(<BillBar cost={estimateFor(0, 0, false).cost} />)
    const grows = [...container.querySelectorAll<HTMLElement>('.rr-seg')].map((segment) =>
      Number(segment.style.flexGrow),
    )
    expect(grows).toEqual([25, 0, 0, 0])
    expect(screen.queryByRole('img')).toBeNull()
  })
})
