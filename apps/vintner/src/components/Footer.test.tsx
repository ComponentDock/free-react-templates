import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the centered copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/© \d{4} Vintner/)).toBeInTheDocument()
  })

  it('links to Component Dock instead of any external attribution', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
