import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StarBar } from './StarBar'

describe('StarBar', () => {
  it('fills the bar to score/5 so 4.6 cuts through the fifth star at 92%', () => {
    render(<StarBar score={4.6} />)
    const bar = screen.getByTestId('star-bar')

    expect(bar.style.getPropertyValue('--star-fill')).toBe('92%')
    expect(bar).toHaveClass('star-bar')
  })

  it('rounds the four catalogue scores to whole percents', () => {
    const fills = [4.6, 4.9, 4.3, 4.7].map((score) => {
      const { unmount } = render(<StarBar score={score} />)
      const fill = screen.getByTestId('star-bar').style.getPropertyValue('--star-fill')
      unmount()
      return fill
    })

    expect(fills).toEqual(['92%', '98%', '86%', '94%'])
  })

  it('is decorative — the rating is read out once, in the row', () => {
    render(<StarBar score={4.3} />)

    expect(screen.getByTestId('star-bar')).toHaveAttribute('aria-hidden', 'true')
  })
})
