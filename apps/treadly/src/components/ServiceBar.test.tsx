import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceBar } from './ServiceBar'

describe('ServiceBar', () => {
  it('renders four service items with title and blurb', () => {
    render(<ServiceBar />)
    for (const title of ['Free Shipping', '60-Day Returns', 'Size Guarantee', 'Secure Checkout']) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/orders over \$75/)).toBeInTheDocument()
    expect(screen.getByText(/256-bit encrypted/)).toBeInTheDocument()
  })
})
