import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Listings } from './Listings'
import { LISTINGS, LISTING_CATEGORY } from '../data'

describe('Listings', () => {
  it('renders the heading and four visible cards with the full card anatomy', () => {
    render(<Listings />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Popular Things To do' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Popular Exclusive Listings In Our Directory')).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles).toHaveLength(4)
    expect(titles[0]).toHaveTextContent(LISTINGS[0]?.title ?? '')
    // Card anatomy on the first card
    const cards = screen.getAllByRole('article')
    expect(cards[0]).toHaveTextContent('Closed')
    expect(cards[0]).toHaveTextContent(`- ${LISTINGS[0]?.rating}`)
    expect(cards[0]).toHaveTextContent(LISTINGS[0]?.address ?? '')
    expect(cards[0]).toHaveTextContent(LISTING_CATEGORY)
    expect(screen.getAllByRole('button', { name: /Save / })).toHaveLength(4)
  })

  it('advances one card with the next control and updates the dots', () => {
    render(<Listings />)
    fireEvent.click(screen.getByRole('button', { name: 'Next listings' }))
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles[0]).toHaveTextContent(LISTINGS[1]?.title ?? '')
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[1]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).not.toHaveAttribute('aria-current')
  })

  it('wraps around with the prev control', () => {
    render(<Listings />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous listings' }))
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles[0]).toHaveTextContent(LISTINGS[4]?.title ?? '')
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[4]).toHaveAttribute('aria-current', 'true')
  })

  it('jumps to a slide via its dot', () => {
    render(<Listings />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles[0]).toHaveTextContent(LISTINGS[2]?.title ?? '')
  })
})
