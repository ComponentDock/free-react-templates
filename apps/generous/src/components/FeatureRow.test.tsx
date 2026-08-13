import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureRow } from './FeatureRow'

describe('FeatureRow', () => {
  it('shows three feature blocks with icons, titles, copy and Learn More links', () => {
    const { container } = render(<FeatureRow />)
    expect(screen.getByRole('heading', { level: 3, name: 'Medical Mission' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Make Donation Now' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'We Need Volunteers' }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('svg')).toHaveLength(3)
    expect(screen.getAllByText(/A small river named Duden/)).toHaveLength(3)
    const links = screen.getAllByRole('link', { name: 'Learn More' })
    expect(links).toHaveLength(3)
    for (const link of links) {
      expect(link).toHaveClass('text-primary')
    }
  })

  it('stacks the blocks vertically on narrow viewports', () => {
    const { container } = render(<FeatureRow />)
    expect(container.querySelector('.grid')).toHaveClass('grid-cols-1')
    expect(container.querySelector('.grid')).toHaveClass('md:grid-cols-3')
  })
})
