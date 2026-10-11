import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { SpecialOffers } from './SpecialOffers'
import { SPECIAL_OFFERS } from '../data/content'

describe('SpecialOffers', () => {
  it('renders the slider with the first slide focused', () => {
    render(<SpecialOffers />)
    expect(screen.getByRole('heading', { level: 2, name: 'Special offers' })).toBeInTheDocument()
    const slides = screen.getAllByRole('listitem')
    expect(slides).toHaveLength(SPECIAL_OFFERS.length)
    expect(slides[0]).toHaveAttribute('data-active', 'true')
    expect(slides[1]).toHaveAttribute('data-active', 'false')
    expect(within(slides[0]!).getByText('Indonesia')).toBeInTheDocument()
  })

  it('cycles the focused slide with the circular arrows, wrapping at both ends', () => {
    render(<SpecialOffers />)
    fireEvent.click(screen.getByRole('button', { name: 'Next offer' }))
    expect(screen.getAllByRole('listitem')[1]).toHaveAttribute('data-active', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous offer' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous offer' }))
    expect(screen.getAllByRole('listitem')[SPECIAL_OFFERS.length - 1]).toHaveAttribute(
      'data-active',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next offer' }))
    expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('data-active', 'true')
  })
})
