import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  const originalScrollBy = Element.prototype.scrollBy

  beforeEach(() => {
    Element.prototype.scrollBy = vi.fn()
  })

  afterEach(() => {
    Element.prototype.scrollBy = originalScrollBy
  })

  it('renders the section title', () => {
    render(<Carousel />)
    expect(screen.getByText('Science Update')).toBeInTheDocument()
  })

  it('renders the See All link', () => {
    render(<Carousel />)
    expect(screen.getByText('See All')).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<Carousel />)
    expect(screen.getByRole('button', { name: 'Previous' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('renders five carousel cards', () => {
    render(<Carousel />)
    expect(
      screen.getByText('26 last-minute holiday gifts that are still thoughtful and unique'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('The Amex Business Platinum vs. the Amex Business Gold'),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Lights that warn planes of obstacles were exposed to Open Internet'),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Substituting 'follow your passion' with 'find your purpose'"),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Fearing corona recession, France announces new measures'),
    ).toBeInTheDocument()
  })

  it('renders an ad strip placeholder', () => {
    render(<Carousel />)
    expect(screen.getByText('Ad Space')).toBeInTheDocument()
  })

  it('scrolls left when Previous is clicked', () => {
    render(<Carousel />)
    const prevBtn = screen.getByRole('button', { name: 'Previous' })
    fireEvent.click(prevBtn)
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })

  it('scrolls right when Next is clicked', () => {
    render(<Carousel />)
    const nextBtn = screen.getByRole('button', { name: 'Next' })
    fireEvent.click(nextBtn)
    expect(Element.prototype.scrollBy).toHaveBeenCalled()
  })

  it('renders kicker tags', () => {
    render(<Carousel />)
    const scienceKickers = screen.getAllByText('Science')
    expect(scienceKickers.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Health')).toBeInTheDocument()
  })

  it('handles scrollBy not being available gracefully', () => {
    // Remove scrollBy to simulate jsdom without the mock
    delete (Element.prototype as { scrollBy?: unknown }).scrollBy
    render(<Carousel />)
    // Should not throw
    fireEvent.click(screen.getByRole('button', { name: 'Previous' }))
    fireEvent.click(screen.getByRole('button', { name: 'Next' }))
  })
})
