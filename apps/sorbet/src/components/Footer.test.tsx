import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright line linking Component Dock', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
