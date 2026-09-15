import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About, Quick Links, Support, and Contact Info columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Talon.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()

    expect(screen.getByText('+888 012 345 67')).toBeInTheDocument()
    expect(screen.getByText('info@talon.dev')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Talon`))).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright line', () => {
    render(<Footer />)

    const componentDock = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDock).toHaveAttribute('target', '_blank')
  })
})
