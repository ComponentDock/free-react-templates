import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading, description, and four feature cards', () => {
    render(<Features />)

    expect(screen.getByRole('heading', { name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByText(/We provide the best shopping experience/)).toBeInTheDocument()

    expect(screen.getByText('Credit Card Support')).toBeInTheDocument()
    expect(screen.getByText('Online Order')).toBeInTheDocument()
    expect(screen.getByText('Free Delivery')).toBeInTheDocument()
    expect(screen.getByText('Product with Gift')).toBeInTheDocument()
  })
})
