import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the centered heading with a short subtext', () => {
    render(<Services />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest News from all categories' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders four icon cards with titles, paragraphs, and outline buttons', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Services' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(4)

    for (const title of [
      'Easy Flight Search',
      'Get Hotel Offers',
      'Holiday Packages',
      'Dedicated Support',
    ]) {
      const card = within(section).getByText(title).closest('article') as HTMLElement
      expect(card).not.toBeNull()
      expect(card.querySelector('svg')).not.toBeNull()
      expect(card.querySelector('p')).toHaveTextContent(/.+/)
      const details = within(card).getByRole('link', { name: 'View Details' })
      expect(details).toHaveClass('rounded-full', 'border-outline')
    }
  })
})
