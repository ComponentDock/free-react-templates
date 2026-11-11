import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TIERS_LABEL } from '../content'
import { TierChips } from './TierChips'

function chips(container: HTMLElement): HTMLElement[] {
  return [...container.querySelectorAll('.pr-tier')] as HTMLElement[]
}

describe('TierChips', () => {
  it('lists the three graduated rates with their seat bands', () => {
    const { container } = render(<TierChips seats={12} />)

    expect(screen.getByRole('list', { name: TIERS_LABEL })).toBeInTheDocument()
    expect(chips(container).map((chip) => chip.textContent)).toEqual([
      'Seats 1–10$12 / seatper seat',
      'Seats 11–50$10 / seatper seat',
      'Seats 51+$8 / seatper seat',
    ])
  })

  it('marks the tiers in use and the one the count sits inside', () => {
    const { container, rerender } = render(<TierChips seats={12} />)

    expect(chips(container).map((chip) => chip.className)).toEqual([
      'pr-tier pr-tier--used',
      'pr-tier pr-tier--used pr-tier--current',
      'pr-tier',
    ])

    rerender(<TierChips seats={1} />)
    expect(chips(container).map((chip) => chip.className)).toEqual([
      'pr-tier pr-tier--used pr-tier--current',
      'pr-tier',
      'pr-tier',
    ])

    rerender(<TierChips seats={200} />)
    expect(chips(container).map((chip) => chip.className)).toEqual([
      'pr-tier pr-tier--used',
      'pr-tier pr-tier--used',
      'pr-tier pr-tier--used pr-tier--current',
    ])
  })

  it('exposes the current tier to assistive technology, not by colour alone', () => {
    const { container, rerender } = render(<TierChips seats={12} />)

    expect(container.querySelectorAll('[aria-current="true"]')).toHaveLength(1)
    expect(chips(container)[1]).toHaveAttribute('aria-current', 'true')
    expect(chips(container)[0]).not.toHaveAttribute('aria-current')

    rerender(<TierChips seats={51} />)
    expect(chips(container)[2]).toHaveAttribute('aria-current', 'true')
  })

  it('keeps a stacked suffix for the narrow breakpoint, hidden from the reader', () => {
    const { container } = render(<TierChips seats={12} />)

    const block = container.querySelector('.pr-tier-per--block')
    expect(block).toHaveAttribute('aria-hidden', 'true')
    expect(block).toHaveTextContent('per seat')
  })
})
