import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
  it('renders the portfolio heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio', { selector: 'h2' })).toBeInTheDocument()
  })

  it('renders 9 portfolio items', () => {
    render(<Portfolio />)

    const items = screen.getAllByRole('img', { hidden: true })
    expect(items.length).toBe(9)
  })

  it('shows overlay on hover and hides on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    // Find the first portfolio item container
    const imgs = screen.getAllByAltText('Shoe Rebranding')
    const firstImg = imgs[0]!
    const container = firstImg.closest('.group')!
    const overlay = container.querySelector('[class*="opacity-0"]')!
    expect(overlay).toBeTruthy()

    // Hover — overlay becomes visible
    await user.hover(container)
    expect(overlay.className).toContain('opacity-100')

    // Unhover — overlay hides again
    await user.unhover(container)
    expect(overlay.className).toContain('opacity-0')
  })

  it('renders unique portfolio titles', () => {
    render(<Portfolio />)

    // Use getAllByText for duplicate titles
    expect(screen.getAllByText('Shoe Rebranding').length).toBe(2)
    expect(screen.getByText('Reworking')).toBeInTheDocument()
    expect(screen.getAllByText('Modern Building').length).toBe(2)
    expect(screen.getByText('Watch')).toBeInTheDocument()
    expect(screen.getByText('Reshape')).toBeInTheDocument()
    expect(screen.getByText('Showreel 2019')).toBeInTheDocument()
    expect(screen.getByText('Render Packaging')).toBeInTheDocument()
  })
})
