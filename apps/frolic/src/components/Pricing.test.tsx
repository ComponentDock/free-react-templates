import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the intro column and two colored pricing cards', () => {
    const { container } = render(<Pricing />)

    expect(screen.getByText('Pricing Plan')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Pricing')
    expect(screen.getByText(/Nemo quis cupiditate fugit/)).toBeInTheDocument()

    const names = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(names).toEqual(['Silver Pack', 'Golden Pack'])

    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$70')).toBeInTheDocument()

    // Both cards share the same three checklist items.
    expect(screen.getAllByText('Lorem ipsum dolor sit amet')).toHaveLength(2)
    expect(screen.getAllByText('Consectetur adipisicing elit')).toHaveLength(2)
    expect(screen.getAllByText('Nemo quis cupiditate')).toHaveLength(2)

    const buyButtons = screen.getAllByRole('link', { name: 'BUY NOW' })
    expect(buyButtons).toHaveLength(2)
    expect(buyButtons[0]!.className).toContain('bg-lagoon')
    expect(buyButtons[1]!.className).toContain('bg-coral')

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(2)
    const silverCircle = cards[0]!.querySelector('span')!
    expect(silverCircle.className).toContain('bg-lagoon')
    expect(silverCircle.className).toContain('h-[90px]')
    expect(cards[1]!.querySelector('span')!.className).toContain('bg-coral')
  })
})
