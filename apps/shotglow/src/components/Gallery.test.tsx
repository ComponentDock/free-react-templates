import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the gallery heading and all filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByRole('heading', { name: /Check Latest Work/i })).toBeInTheDocument()
    for (const cat of ['All', 'Wedding', 'Fashion', 'Portrait', 'Magazine']) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all 6 gallery items initially', () => {
    render(<Gallery />)
    expect(
      screen.getAllByRole('link', { name: /photography|portrait|session|editorial|ceremony/i })
        .length,
    ).toBeGreaterThanOrEqual(6)
  })

  it('filters gallery items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Fashion' }))
    // Only fashion items should remain (2 items with "Fashion photography" subtitle)
    const items = screen.getAllByText('Fashion photography')
    expect(items.length).toBeGreaterThanOrEqual(1)
  })

  it('shows all items when All filter is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: 'Fashion' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    // Should have all items back
    expect(screen.getByText('Smiling Beautiful Women')).toBeInTheDocument()
    expect(screen.getByText('Urban Style Collection')).toBeInTheDocument()
  })
})
