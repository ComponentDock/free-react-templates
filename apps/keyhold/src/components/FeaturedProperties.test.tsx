import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FeaturedProperties } from './FeaturedProperties'

describe('FeaturedProperties', () => {
  it('renders the subheading and section heading', () => {
    render(<FeaturedProperties />)

    expect(screen.getByText('What we offer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Exclusive Offer For You' }),
    ).toBeInTheDocument()
  })

  it('renders three property cards with price, title, location, and specs', () => {
    render(<FeaturedProperties />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    expect(screen.getByText('Blue View Home')).toBeInTheDocument()
    expect(screen.getByText('$3,050')).toBeInTheDocument()
    expect(screen.getAllByText('/mo')).toHaveLength(3)
    expect(screen.getByText('2854 Meadow View Drive, Hartford, USA')).toBeInTheDocument()

    // beds / baths / sqft icon rows
    expect(screen.getAllByText('3')).not.toHaveLength(0)
    expect(screen.getAllByText('2')).not.toHaveLength(0)
    expect(screen.getByText('1,878 sqft')).toBeInTheDocument()
  })

  it('shows the agent strip and hover actions on each card', () => {
    render(<FeaturedProperties />)

    expect(screen.getAllByText('Ben Ford')).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: /save property/i })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: /compare property/i })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: /view property/i })).toHaveLength(3)
  })

  it('shows a struck-through old price on each card', () => {
    const { container } = render(<FeaturedProperties />)

    const oldPrices = container.querySelectorAll('s')
    expect(oldPrices.length).toBe(3)
    expect(oldPrices[0]).toHaveTextContent('$800,000')
  })
})
