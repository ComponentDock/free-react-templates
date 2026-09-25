import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Quick Links, Departments, and Contact Info columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Departments' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()

    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@curelink.com')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Departments' })).toBeInTheDocument()
  })

  it('links to Component Dock in the bottom bar', () => {
    render(<Footer />)

    const componentDock = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDock).toHaveAttribute('target', '_blank')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Curelink`)),
    ).toBeInTheDocument()
  })
})
