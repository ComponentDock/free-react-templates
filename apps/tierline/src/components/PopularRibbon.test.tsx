import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PopularRibbon } from './PopularRibbon'

describe('PopularRibbon', () => {
  it('is a paragraph, not a heading, so the page keeps three h2s', () => {
    render(<PopularRibbon label="Most popular" />)

    const ribbon = screen.getByText('Most popular')
    expect(ribbon.tagName).toBe('P')
    expect(ribbon).toHaveClass('plan-ribbon')
    expect(screen.queryByRole('heading')).toBeNull()
  })

  it('is a single unbroken label — it never wraps to two lines', () => {
    render(<PopularRibbon label="Most popular" />)

    expect(screen.getByText('Most popular').textContent).toBe('Most popular')
    expect(screen.getByText('Most popular').querySelector('*')).toBeNull()
  })
})
