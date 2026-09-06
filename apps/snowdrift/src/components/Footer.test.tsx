import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, tagline, and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Snowdrift')).toBeInTheDocument()
    expect(screen.getByText(/winter sale modal popup/i)).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
