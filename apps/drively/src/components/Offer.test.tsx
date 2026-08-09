import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Offer } from './Offer'

const cardNames = () =>
  screen.getAllByRole('article').map((card) => within(card).getByRole('heading').textContent)

describe('Offer', () => {
  it('renders the heading, controls, and at least two car cards with details', () => {
    render(<Offer />)
    expect(screen.getByRole('heading', { name: /Our Offer/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Previous cars/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Next cars/i })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards.length).toBeGreaterThanOrEqual(2)

    const firstCard = within(cards[0]!)
    expect(firstCard.getByRole('heading', { name: /Range Rover S64 Coupe/i })).toBeInTheDocument()
    expect(firstCard.getByText('$250')).toBeInTheDocument()
    expect(firstCard.getAllByRole('link', { name: 'Rent Now' })).toHaveLength(1)
  })

  it('cycles forward with the Next button (wrapping)', async () => {
    const user = userEvent.setup()
    render(<Offer />)
    expect(cardNames()[0]).toMatch(/Range Rover S64 Coupe/i)

    await user.click(screen.getByRole('button', { name: /Next cars/i }))
    expect(cardNames()[0]).toMatch(/Mercedes-Benz C-Class/i)
    expect(cardNames()[1]).toMatch(/BMW 3 Series/i)
    expect(cardNames()[2]).toMatch(/Range Rover S64 Coupe/i)

    await user.click(screen.getByRole('button', { name: /Next cars/i }))
    await user.click(screen.getByRole('button', { name: /Next cars/i }))
    expect(cardNames()[0]).toMatch(/Range Rover S64 Coupe/i)
  })

  it('cycles backward with the Previous button (wrapping)', async () => {
    const user = userEvent.setup()
    render(<Offer />)

    await user.click(screen.getByRole('button', { name: /Previous cars/i }))
    expect(cardNames()[0]).toMatch(/BMW 3 Series/i)

    await user.click(screen.getByRole('button', { name: /Previous cars/i }))
    expect(cardNames()[0]).toMatch(/Mercedes-Benz C-Class/i)
  })
})
