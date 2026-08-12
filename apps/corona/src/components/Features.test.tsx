import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('shows the three feature items with Read More links', () => {
    render(<Features />)

    for (const title of ['New Classes', 'Top Courses', 'Full E-Books']) {
      const item = screen.getByRole('heading', { name: title }).closest('div')!
      expect(within(item).getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })

  it('renders the feature icons', () => {
    const { container } = render(<Features />)
    expect(container.querySelectorAll('svg')).toHaveLength(3)
  })
})
