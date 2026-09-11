import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BestSellers } from './BestSellers'

describe('BestSellers', () => {
  it('renders the heading', () => {
    render(<BestSellers />)
    expect(screen.getByRole('heading', { name: /best sellers/i })).toBeInTheDocument()
  })

  it('renders product slides', () => {
    render(<BestSellers />)
    expect(screen.getByText('Fujifilm X100T Camera')).toBeInTheDocument()
    expect(screen.getByText('Samsung Curved Monitor')).toBeInTheDocument()
    expect(screen.getByText('Blue Yeti Microphone')).toBeInTheDocument()
  })

  it('renders navigation arrows', () => {
    render(<BestSellers />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('scrolls on arrow click', async () => {
    const mockScrollBy = vi.fn()
    Element.prototype.scrollBy = mockScrollBy

    const user = userEvent.setup()
    render(<BestSellers />)

    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /previous/i }))

    expect(mockScrollBy).toHaveBeenCalledTimes(2)
  })

  it('displays sale and new badges', () => {
    render(<BestSellers />)
    const saleBadges = screen.getAllByText('sale')
    expect(saleBadges.length).toBeGreaterThan(0)
    const newBadges = screen.getAllByText('new')
    expect(newBadges.length).toBeGreaterThan(0)
  })

  it('displays prices with original prices for discounted items', () => {
    render(<BestSellers />)
    expect(screen.getByText('$520.00')).toBeInTheDocument()
    expect(screen.getByText('$590.00')).toBeInTheDocument()
  })
})
