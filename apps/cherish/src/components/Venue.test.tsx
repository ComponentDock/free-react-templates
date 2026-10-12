import { render, screen, within } from '@testing-library/react'
import { Venue } from './Venue'
import { VENUES, VENUE_EYEBROW, VENUE_HEADING, VENUE_LEAD } from '../lib/site'
import { venueCardClass, venueIconClass, venueLineClass } from '../lib/styles'

describe('Venue — when and where', () => {
  it('opens with the design’s own title block', () => {
    render(<Venue />)

    const block = screen.getByTestId('where')

    expect(block).toHaveAttribute('aria-labelledby', 'where-heading')
    expect(within(block).getByText(VENUE_EYEBROW)).toBeInTheDocument()
    expect(within(block).getByRole('heading', { level: 2 }).textContent).toBe(VENUE_HEADING)
    expect(within(block).getByText(VENUE_LEAD)).toBeInTheDocument()
  })

  it('stands three cards, each with its clock line and its address line', () => {
    const { container } = render(<Venue />)

    const cards = screen.getAllByTestId('venue-card')

    expect(cards).toHaveLength(VENUES.length)
    expect(cards[0]?.className).toBe(venueCardClass)

    for (const [index, card] of Array.from(cards).entries()) {
      const venue = VENUES[index]

      expect(within(card).getByRole('heading', { level: 3 }).textContent).toBe(venue?.title)
      expect(card.querySelector('svg')?.getAttribute('class')).toContain(venueIconClass)

      const lines = card.querySelectorAll('li')

      expect(lines).toHaveLength(2)
      expect(lines[0]?.className).toBe(venueLineClass)
      expect(lines[0]?.textContent).toContain(venue?.time)
      expect(lines[1]?.textContent).toContain(venue?.place)
    }

    expect(container.querySelectorAll('li svg')).toHaveLength(VENUES.length * 2)
  })
})
