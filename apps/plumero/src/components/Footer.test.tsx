import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, navigation links, social icons, and copyright with Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Plumero' }).length).toBeGreaterThanOrEqual(1)

    for (const label of ['Home', 'About', 'Products', 'Blog', 'Contact']) {
      expect(screen.getByRole('navigation', { name: 'Footer navigation' }))
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
