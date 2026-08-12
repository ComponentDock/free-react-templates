import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Team } from './Team'

describe('Team', () => {
  it('renders the centered heading with the tagline', () => {
    render(<Team />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'About Creative Agency Team' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Who are in extremely love with eco friendly system.'),
    ).toBeInTheDocument()
  })

  it('renders four cards with a photo, name, and role', () => {
    const { container } = render(<Team />)

    const section = screen.getByRole('region', { name: 'Team' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(4)

    expect(container.querySelectorAll('img')).toHaveLength(4)
    expect(
      within(cards[0]!).getByRole('heading', { level: 3, name: 'Ethel Davis' }),
    ).toBeInTheDocument()
    expect(within(cards[0]!).getByText('Managing Director (Sales)')).toBeInTheDocument()
    expect(
      within(cards[3]!).getByRole('heading', { level: 3, name: 'Lena Keller' }),
    ).toBeInTheDocument()
  })

  it('reveals social icon links on hover', () => {
    render(<Team />)

    const section = screen.getByRole('region', { name: 'Team' })
    const card = within(section).getAllByRole('article')[0] as HTMLElement
    const overlay = card.querySelector('.opacity-0') as HTMLElement
    expect(overlay).not.toBeNull()
    expect(overlay).toHaveClass('group-hover:opacity-100')

    for (const label of ['Facebook', 'Twitter', 'LinkedIn']) {
      expect(within(card).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(card.querySelectorAll('svg')).toHaveLength(3)
  })
})
