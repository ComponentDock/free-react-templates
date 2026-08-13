import { render, screen, within } from '@testing-library/react'
import { Models } from './Models'
import { describe, expect, it } from 'vitest'

describe('Models', () => {
  it('renders the heading column and nine model cards with hover stats', () => {
    const { container } = render(<Models />)
    expect(screen.getByRole('heading', { level: 2, name: /Our Tops Model/ })).toBeInTheDocument()

    const cards = container.querySelectorAll('article')
    expect(cards).toHaveLength(9)

    const names = screen.getAllByRole('heading', { level: 3, name: /Coleen Husaff/ })
    expect(names).toHaveLength(9)

    // Each card's hover panel carries the name + first five stats.
    const firstCard = within(cards[0]!)
    expect(firstCard.getByText('Height')).toBeInTheDocument()
    expect(firstCard.getByText('Bust')).toBeInTheDocument()
    expect(firstCard.getByText('Waist')).toBeInTheDocument()
    expect(firstCard.getByText('Hips')).toBeInTheDocument()
    expect(firstCard.getByText('Shoe')).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(9)
  })
})
