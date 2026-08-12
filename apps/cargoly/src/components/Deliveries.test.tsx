import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Deliveries } from './Deliveries'
import { DELIVERIES_TITLE, DELIVERY_ADDRESS, DELIVERY_CARDS } from '../data'

describe('Deliveries', () => {
  it('renders the heading and four delivery cards', () => {
    render(<Deliveries />)

    expect(screen.getByRole('heading', { name: DELIVERIES_TITLE })).toBeInTheDocument()
    for (const card of DELIVERY_CARDS) {
      expect(screen.getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(screen.getByAltText(card.title)).toHaveAttribute(
        'src',
        `https://picsum.photos/seed/${card.seed}/370/240`,
      )
    }
    expect(screen.getAllByText(DELIVERY_ADDRESS)).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: /check now/ })).toHaveLength(4)
  })
})
