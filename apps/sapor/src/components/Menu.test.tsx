import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Menu } from './Menu'

describe('Menu', () => {
  it('shows the eyebrow and heading', () => {
    render(<Menu />)

    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: "Chef's Selections" })).toBeInTheDocument()
  })

  it('shows the four dishes with prices and descriptions', () => {
    render(<Menu />)

    for (const dish of ['Burrata', 'Spaghetti alla Carbonara', 'Branzino al Forno', 'Tiramisu']) {
      expect(screen.getByRole('heading', { level: 3, name: dish })).toBeInTheDocument()
    }
    for (const price of ['$18', '$24', '$38', '$12']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getByText(/Creamy burrata/)).toBeInTheDocument()
    expect(screen.getByText(/espresso-soaked ladyfingers/)).toBeInTheDocument()
  })

  it('marks only the Burrata card as Chef\u2019s Pick', () => {
    render(<Menu />)

    const badges = screen.getAllByText("Chef's Pick")
    expect(badges).toHaveLength(1)

    // The badge sits inside the Burrata card: same article as the heading
    const burrata = screen.getByRole('heading', { level: 3, name: 'Burrata' }).closest('article')!
    expect(burrata).toContainElement(badges[0]!)

    const tiramisu = screen.getByRole('heading', { level: 3, name: 'Tiramisu' }).closest('article')!
    expect(tiramisu).not.toContainElement(badges[0]!)
  })
})
