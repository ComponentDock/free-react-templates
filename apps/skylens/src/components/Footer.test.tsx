import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and description', () => {
    render(<Footer />)
    expect(screen.getByText('SkyLens')).toBeInTheDocument()
    expect(screen.getByText(/professional drone photography/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders service list', () => {
    render(<Footer />)
    expect(screen.getByText('Drone Mapping')).toBeInTheDocument()
    expect(screen.getByText('Real Estate')).toBeInTheDocument()
    expect(screen.getByText('Commercial')).toBeInTheDocument()
    expect(screen.getByText('Construction')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /component dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
