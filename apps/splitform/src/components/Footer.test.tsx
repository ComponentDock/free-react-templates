import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, tagline, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Splitform')).toBeInTheDocument()
    expect(screen.getByText(/a dual-panel sign-in/i)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
