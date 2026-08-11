import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowseApartments } from './BrowseApartments'
import { APARTMENTS, BROWSE_BLURB, BROWSE_CTA, BROWSE_HEADING } from '../data'

describe('BrowseApartments', () => {
  it('renders the section heading with the tan underline and intro copy', () => {
    const { container } = render(<BrowseApartments />)

    expect(screen.getByRole('heading', { name: BROWSE_HEADING })).toBeInTheDocument()
    expect(screen.getByText(BROWSE_BLURB)).toBeInTheDocument()
    expect(container.querySelector('[aria-hidden="true"]')?.className).toMatch(/bg-brand/)
  })

  it('renders four apartment cards with tan title and black price highlights', () => {
    const { container } = render(<BrowseApartments />)

    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(4)

    for (const card of APARTMENTS) {
      const title = screen.getByText(card.city)
      expect(title.className).toMatch(/bg-brand/)
      // box-shadow gutter extends the highlight 10px past the text end.
      expect(title.className).toMatch(/shadow-\[10px_0_0/)
      for (const price of screen.getAllByText(card.price)) {
        expect(price.className).toMatch(/bg-black/)
        expect(price.className).toMatch(/shadow-\[10px_0_0/)
      }
    }
  })

  it('renders the centered Browse All Apartments button below the grid', () => {
    render(<BrowseApartments />)

    const cta = screen.getByRole('link', { name: BROWSE_CTA })
    expect(cta.className).toMatch(/bg-brand/)
    expect(cta.className).toMatch(/rounded-none/)
  })
})
