import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and the four plans with their prices', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { name: /Choose the best plan that suits you/ }),
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByText('£199.00')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Economy' })).toBeInTheDocument()
    expect(screen.getByText('£299.00')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Premium' })).toBeInTheDocument()
    expect(screen.getByText('£399.00')).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Enterprise' })).toBeInTheDocument()
    expect(screen.getByText('£499.00')).toBeInTheDocument()
  })

  it('shows a purchase link for every plan', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('link', { name: 'Purchase' })).toHaveLength(4)
  })
})
