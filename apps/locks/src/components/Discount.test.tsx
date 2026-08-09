import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Discount } from './Discount'

describe('Discount', () => {
  it('renders the discount headline, sub-heading and call to action', () => {
    render(<Discount />)
    expect(screen.getByRole('heading', { name: /save up to 25% off/i })).toBeInTheDocument()
    expect(screen.getByText(/all services discount/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /make an appointment/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
