import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Properties } from './Properties'
import { properties } from '../data'

describe('Properties', () => {
  it('renders three property cards with prices, specs, title, location and arrow', () => {
    const { container } = render(<Properties />)
    expect(screen.getByText('What we offer')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Exclusive Offer For You' }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(properties.length)

    for (const property of properties) {
      const card = cards[properties.indexOf(property)]
      expect(card).toHaveTextContent(property.oldPrice)
      expect(card).toHaveTextContent(property.price)
      expect(card).toHaveTextContent(property.per)
      expect(card).toHaveTextContent(String(property.beds))
      expect(card).toHaveTextContent(String(property.baths))
      expect(card).toHaveTextContent(property.sqft)
      expect(card).toHaveTextContent(property.title)
      expect(card).toHaveTextContent(property.location)
      expect(screen.getByRole('link', { name: `View ${property.title}` })).toBeInTheDocument()
    }

    // Photos render with the overlapping white text block styling.
    const imgs = container.querySelectorAll('img')
    expect(imgs.length).toBe(properties.length)
    expect(imgs[0]!).toHaveAttribute('src', properties[0]!.image)
  })

  it('styles the corner arrow button with the pink quarter radius', () => {
    render(<Properties />)
    const arrow = screen.getByRole('link', { name: 'View The Blue Sky Home' })
    expect(arrow.className).toContain('rounded-[50%_0_0_0]')
    expect(arrow.className).toContain('bg-brand')
  })
})
