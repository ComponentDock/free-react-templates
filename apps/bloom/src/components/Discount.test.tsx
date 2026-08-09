import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Discount } from './Discount'

describe('Discount', () => {
  it('shows the discount headline, student note, and Book Now CTA', () => {
    render(<Discount />)

    expect(screen.getByRole('heading', { name: 'Save up to 25% Off' })).toBeInTheDocument()
    expect(screen.getByText(/Student/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toHaveAttribute('href', '#appointment')
  })
})
