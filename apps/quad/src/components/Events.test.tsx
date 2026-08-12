import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  it('shows the Upcoming Events title in white on the navy background', () => {
    render(<Events />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Upcoming Events/)
    expect(heading).toHaveClass('text-white')
    expect(screen.getByText(/Replenish man have thing gathering lights/)).toBeInTheDocument()
  })

  it('renders two event cards with date, time, location, blurb and square View Details buttons', () => {
    render(<Events />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(2)

    const first = cards[0]!
    expect(within(first).getByText('15')).toBeInTheDocument()
    expect(within(first).getByText('Jun')).toBeInTheDocument()
    expect(within(first).getByText('12:00 AM - 12:30 AM')).toBeInTheDocument()
    expect(within(first).getByText('Hilton Quebec')).toBeInTheDocument()
    expect(within(first).getByText(/One make creepeth man for so bearing/)).toBeInTheDocument()
    expect(first.querySelector('svg.lucide-clock')).toBeInTheDocument()
    expect(first.querySelector('svg.lucide-map-pin')).toBeInTheDocument()

    const second = cards[1]!
    expect(within(second).getByText('25')).toBeInTheDocument()
    expect(within(second).getByText('Jun')).toBeInTheDocument()

    const viewDetails = within(first).getByRole('link', { name: /View Details/ })
    expect(viewDetails).toHaveClass('bg-accent', 'rounded-none')
  })

  it('renders the overlay panel with the semi-transparent navy background', () => {
    const { container } = render(<Events />)
    const overlay = container.querySelector('[class*="rgba(0,35,71,0.5)"]')
    expect(overlay).toBeInTheDocument()
    expect(overlay?.className).toMatch(/sm:w-\[275px\]/)
  })
})
