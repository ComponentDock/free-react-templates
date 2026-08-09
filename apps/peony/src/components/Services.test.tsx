import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and four numbered service cards with Explore links', () => {
    render(<Services />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /the beauty is not luxurious imagination/i }),
    ).toBeInTheDocument()

    const cards = screen.getAllByRole('listitem')
    expect(cards).toHaveLength(4)
    for (const name of [
      'Manicure & Pedicure',
      'Haircut & Coloring',
      'Professional Makeup',
      'Body Spa',
    ]) {
      const card = screen.getByText(name).closest('li')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByRole('link', { name: /explore/i })).toHaveAttribute(
        'href',
        '#booking',
      )
    }
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
  })
})
