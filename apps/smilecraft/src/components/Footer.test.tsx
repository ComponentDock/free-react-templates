import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand, columns, newsletter, copyright, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByText('Smilecraft')).toBeInTheDocument()
    expect(screen.getByText(/Providing exceptional dental care/)).toBeInTheDocument()

    expect(screen.getByRole('navigation', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Services' })).toBeInTheDocument()

    expect(screen.getByText('General Dentistry')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()

    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe to newsletter' })).toBeInTheDocument()

    expect(screen.getByText(/© 2026 Smilecraft/)).toBeInTheDocument()

    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
  })
})
