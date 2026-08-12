import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders on black with the white title block', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Services' })
    expect(section).toHaveClass('bg-black')
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(
      within(section).getByRole('heading', {
        level: 2,
        name: 'We\u2019re a full-service UX design agency, We build digital products and brands',
      }),
    ).toHaveClass('text-white')
  })

  it('renders three bordered icon cards', () => {
    render(<Services />)

    const section = screen.getByRole('region', { name: 'Services' })
    const cards = within(section).getAllByRole('article')
    expect(cards).toHaveLength(3)

    for (const title of ['UX Research', 'UI Design', 'Development']) {
      const card = within(section).getByText(title).closest('article') as HTMLElement
      expect(card).toHaveClass('border-card', 'hover:border-card-hover')
      expect(card.querySelector('svg')).not.toBeNull()
      expect(card.querySelector('p')).toHaveTextContent(/.+/)
    }
  })
})
