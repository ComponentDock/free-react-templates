import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and site name', () => {
    render(<Footer />)

    expect(screen.getByText('Reckoner')).toBeInTheDocument()
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders Contact Info section', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
    expect(screen.getByText('info@reckoner.com')).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders copyright line', () => {
    render(<Footer />)

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Reckoner`)),
    ).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has proper ARIA labels for social icons', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
