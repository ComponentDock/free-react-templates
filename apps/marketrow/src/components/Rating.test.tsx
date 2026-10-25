import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PRODUCTS } from '../content'
import { Rating } from './Rating'

const headphones = PRODUCTS[0]!
const backpack = PRODUCTS[2]!

describe('Rating', () => {
  it('puts the score beside the masked bar, muted weight for the count', () => {
    render(<Rating product={headphones} />)
    const row = screen.getByText('4.6').closest('p')

    expect(row).toHaveClass('mb-3', 'flex', 'items-center', 'gap-2', 'text-[13.5px]', 'font-bold')
    expect(screen.getByText('(218 reviews)')).toHaveClass('font-normal', 'text-muted')
    expect(screen.getByTestId('star-bar')).toBeInTheDocument()
  })

  it('keeps the thousands separator in the review count', () => {
    render(<Rating product={backpack} />)

    expect(screen.getByText('(1,042 reviews)')).toBeInTheDocument()
  })

  it('states the rating once in words for screen readers', () => {
    render(<Rating product={headphones} />)

    expect(screen.getByText('Rated 4.6 out of 5')).toHaveClass('sr-only')
  })
})
