import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CallToAction } from './CallToAction'

describe('CallToAction', () => {
  it('renders the heading and tagline', () => {
    render(<CallToAction />)
    expect(screen.getByText('Custom flower')).toBeInTheDocument()
    expect(screen.getByText(/Let our flowers make your party/)).toBeInTheDocument()
  })

  it('renders Order Now and Contact Us buttons', () => {
    render(<CallToAction />)
    expect(screen.getByRole('link', { name: /order now/i })).toHaveAttribute('href', '#shop')
    expect(screen.getByRole('link', { name: /contact us/i })).toHaveAttribute('href', '#contact')
  })
})
