import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FamilyFriends } from './FamilyFriends'
import { ATTENDANTS } from '../lib/site'

describe('FamilyFriends', () => {
  it('opens with the design eyebrow and band title', () => {
    render(<FamilyFriends />)

    expect(screen.getByText('Bridesmaid & Groomsmen')).toHaveClass('border-dashed')
    expect(screen.getByRole('heading', { level: 2, name: 'Family & Friends' })).toHaveClass('font-script')
  })

  it('lists the eight attendants with a circular portrait, a name and a side', () => {
    const { container } = render(<FamilyFriends />)

    const grid = container.querySelector('ul') as HTMLElement
    const cards = Array.from(grid.querySelectorAll('li'))

    expect(cards).toHaveLength(8)
    expect(grid).toHaveClass('grid-cols-2', 'md:grid-cols-4', 'xl:grid-cols-8')

    for (const [position, card] of cards.entries()) {
      const person = ATTENDANTS[position]!

      expect(card.querySelector('img')).toHaveClass('rounded-full', 'aspect-square', 'max-w-[150px]')
      expect(card.querySelector('img')?.getAttribute('src')).toContain(
        `picsum.photos/seed/${person.photo}/300/300`,
      )
      expect(card.querySelector('h3')).toHaveTextContent(person.name)
      expect(card.querySelector('span')).toHaveTextContent(person.role)
    }
  })

  it('names four attendants on each side of the party', () => {
    render(<FamilyFriends />)

    expect(screen.getAllByText('Groomsman')).toHaveLength(4)
    expect(screen.getAllByText('Bridesmaid')).toHaveLength(4)
  })
})
