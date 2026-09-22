import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ParallaxDiscount } from './ParallaxDiscount'

describe('ParallaxDiscount', () => {
  it('renders discount percentage', () => {
    render(<ParallaxDiscount />)
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('%')).toBeInTheDocument()
  })

  it('renders title and description', () => {
    render(<ParallaxDiscount />)
    expect(screen.getByText('Only in August')).toBeInTheDocument()
    expect(screen.getByText(/limited-time summer discount/)).toBeInTheDocument()
  })

  it('renders Read More button', () => {
    render(<ParallaxDiscount />)
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#appointment')
  })
})
