import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByText('All')).toBeInTheDocument()
    expect(screen.getByText('Architecture')).toBeInTheDocument()
    expect(screen.getByText('Buildings')).toBeInTheDocument()
    expect(screen.getByText('Bridges')).toBeInTheDocument()
  })

  it('renders project images initially (all)', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(8)
  })

  it('filters projects when category button clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByText('Architecture'))
    const images = screen.getAllByRole('img')
    // Architecture has 3 items
    expect(images.length).toBeGreaterThanOrEqual(3)
    expect(images.length).toBeLessThanOrEqual(5)
  })
})
