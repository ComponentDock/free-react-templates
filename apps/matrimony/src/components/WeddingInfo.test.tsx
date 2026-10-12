import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WeddingInfo } from './WeddingInfo'
import { CARD_CTA, CARD_LINK, EVENT_CARDS, INFO_TITLE } from '../lib/site'

describe('WeddingInfo', () => {
  it('sets the three event cards on the near-white band', () => {
    const { container } = render(<WeddingInfo />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(INFO_TITLE)

    const band = container.querySelector('section') as HTMLElement

    expect(band).toHaveClass('damask-cream')
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getAllByRole('heading', { level: 3 }).map((card) => card.textContent)).toEqual([
      'The Ceremony',
      'The Reception',
      'The Party',
    ])
  })

  it('wears the scarlet border on one card and reveals it on the others', () => {
    render(<WeddingInfo />)

    const active = screen.getByTestId('card-reception')

    expect(active).toHaveClass('border-brand', 'pb-[70px]')
    expect(within(active).getByRole('link', { name: CARD_CTA }).parentElement).toHaveClass(
      'opacity-100',
    )

    const idle = screen.getByTestId('card-ceremony')

    expect(idle).toHaveClass('border-transparent', 'hover:border-brand', 'focus-within:border-brand')
    expect(within(idle).getByRole('link', { name: CARD_CTA }).parentElement).toHaveClass(
      'opacity-0',
      'group-hover:opacity-100',
      'group-focus-within:opacity-100',
    )
  })

  it('gives every card its four rows, its map link and its pill', () => {
    render(<WeddingInfo />)

    for (const card of EVENT_CARDS) {
      const article = screen.getByTestId(`card-${card.key}`)
      const rows = within(article).getAllByRole('listitem')

      expect(rows).toHaveLength(4)
      expect(rows.map((row) => row.textContent)).toEqual(card.rows.map((row) => row.text))
      expect(within(article).getByRole('link', { name: CARD_LINK })).toHaveAttribute(
        'href',
        '#contact',
      )
      expect(within(article).getByRole('link', { name: CARD_CTA })).toHaveAttribute('href', '#rsvp')
      expect(article.querySelectorAll('svg')).toHaveLength(5)
    }

    expect(screen.getAllByRole('link', { name: CARD_LINK })).toHaveLength(3)
  })
})
