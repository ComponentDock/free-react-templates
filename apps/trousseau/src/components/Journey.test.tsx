import { render, screen } from '@testing-library/react'
import { JOURNEY_CARDS, JOURNEY_HEADING } from '../lib/site'
import { Journey } from './Journey'

function tokens(element: Element): string[] {
  return (element.getAttribute('class') ?? '').split(' ')
}

describe('the journey band', () => {
  it('wraps the written cards in two rows of three portraits', () => {
    const { container } = render(<Journey />)

    expect(screen.getByRole('heading', { name: JOURNEY_HEADING })).toBeInTheDocument()

    const rows = [
      container.querySelector('#attendants'),
      container.querySelector('#groomsmen'),
    ]

    for (const row of rows) {
      expect(row).not.toBeNull()
      expect((row as Element).querySelectorAll('img')).toHaveLength(3)
    }

    const avatars = Array.from(container.querySelectorAll('img'))
    expect(avatars).toHaveLength(6)
    expect(tokens(avatars[0] as Element)).toContain('rounded-full')
    expect(tokens(avatars[0] as Element)).toContain('h-[200px]')
  })

  it('names every person in the party with a role beneath', () => {
    render(<Journey />)

    expect(screen.getByText('Wren Alcott')).toBeInTheDocument()
    expect(screen.getByText('Maid of honour')).toBeInTheDocument()
    expect(screen.getByText('Emil Duarte')).toBeInTheDocument()
    expect(screen.getAllByText('Groomsman')).toHaveLength(2)
  })

  it('sets four written cards, each with a flourish in one lower corner', () => {
    const { container } = render(<Journey />)

    const cards = Array.from(container.querySelectorAll('article'))

    expect(cards).toHaveLength(4)
    expect(cards.map((card) => card.textContent)).toEqual(
      JOURNEY_CARDS.map((card) => `${card.title}${card.blurb}`),
    )
    expect(cards.every((card) => tokens(card).includes('shadow-card'))).toBe(true)
    expect(cards.every((card) => card.querySelectorAll('[data-ornament]').length === 1)).toBe(true)

    const corners = Array.from(container.querySelectorAll('article [data-ornament]')).map(
      (ornament) => ornament.getAttribute('class') ?? '',
    )

    expect(corners.filter((corner) => corner.includes('-left-[22px]'))).toHaveLength(2)
    expect(corners.filter((corner) => corner.includes('-right-[22px]'))).toHaveLength(2)
  })
})
