import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders all filter buttons', () => {
    render(<Gallery />)
    for (const filter of ['All', 'Human', 'Nature', 'Country', 'Video']) {
      expect(screen.getByText(filter)).toBeInTheDocument()
    }
  })

  it('renders gallery items', () => {
    render(<Gallery />)
    expect(screen.getByTestId('gallery-item-1')).toBeInTheDocument()
    expect(screen.getByTestId('gallery-item-12')).toBeInTheDocument()
  })

  it('shows all items by default', () => {
    render(<Gallery />)
    const items = screen.getAllByTestId(/^gallery-item-/)
    expect(items.length).toBe(12)
  })

  it('filters items when Nature is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByText('Nature'))
    const items = screen.getAllByTestId(/^gallery-item-/)
    expect(items.length).toBeLessThan(12)
  })

  it('restores all items when All is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByText('Nature'))
    await user.click(screen.getByText('All'))
    const items = screen.getAllByTestId(/^gallery-item-/)
    expect(items.length).toBe(12)
  })

  it('renders View More button', () => {
    render(<Gallery />)
    expect(screen.getByText('View More')).toBeInTheDocument()
  })
})
