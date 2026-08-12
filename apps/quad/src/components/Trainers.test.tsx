import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Trainers } from './Trainers'

describe('Trainers', () => {
  it('shows the Our Expert Trainers title with a blurb', () => {
    render(<Trainers />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toMatch(/Our Expert Trainers/)
    expect(screen.getByText(/very confused\.$/)).toBeInTheDocument()
  })

  it('renders four trainer cards with portrait, name, designation, blurb and socials', () => {
    render(<Trainers />)

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(4)
    expect(
      cards.map((card) => within(card).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(['Mated Nithan', 'David Cameron', 'Jain Redmel', 'Nathan Macken'])

    const first = cards[0]!
    expect(within(first).getByText('Sr. web designer')).toBeInTheDocument()
    expect(within(first).getByText(/difference in price/)).toBeInTheDocument()
    expect(first.querySelector('img')).toHaveAttribute(
      'src',
      expect.stringContaining('quad-trainer'),
    )

    expect(
      within(first).getByRole('link', { name: 'Mated Nithan on Facebook' }),
    ).toBeInTheDocument()
    expect(within(first).getByRole('link', { name: 'Mated Nithan on Twitter' })).toBeInTheDocument()
    expect(
      within(first).getByRole('link', { name: 'Mated Nithan on Linkedin' }),
    ).toBeInTheDocument()
    expect(
      within(first).getByRole('link', { name: 'Mated Nithan on Pinterest' }),
    ).toBeInTheDocument()
    expect(first.querySelectorAll('svg')).toHaveLength(4)
  })
})
