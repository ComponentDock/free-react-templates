import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BigSale } from './BigSale'
import { BIG_SALE, IMAGES } from '../data'

describe('BigSale', () => {
  it('renders the Big Sale split with image, meta line and Shop Now', () => {
    const { container } = render(<BigSale />)

    expect(screen.getByRole('heading', { level: 2, name: 'Big Sale!' })).toBeInTheDocument()

    const image = screen.getByRole('img', { name: 'Big sale promotion' })
    expect(image).toHaveAttribute('src', IMAGES.bigSale)
    expect(image).toHaveClass('rounded-lg')

    const heading = screen.getByRole('heading', { level: 3, name: BIG_SALE.heading })
    expect(heading).toBeInTheDocument()

    const meta = container.querySelector('p')
    expect(meta).toHaveTextContent('By Carl Smith')
    expect(meta).toHaveTextContent('September 3, 2018')
    expect(meta).toHaveTextContent('•')

    expect(screen.getByText(BIG_SALE.blurb)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Shop Now' })).toHaveAttribute('href', '#shop')
  })
})
