import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About section', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders Learn More links', () => {
    render(<Footer />)
    expect(screen.getByText('How it works?')).toBeInTheDocument()
    expect(screen.getByText('Useful Tools')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Sitemap')).toBeInTheDocument()
  })

  it('renders Support links', () => {
    render(<Footer />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Help Desk')).toBeInTheDocument()
    expect(screen.getByText('Knowledgebase')).toBeInTheDocument()
  })

  it('renders Connect With Us heading', () => {
    render(<Footer />)
    expect(screen.getByText('Connect With Us')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    expect(screen.getByText(String(new Date().getFullYear()), { exact: false })).toBeInTheDocument()
  })

  it('renders About Us links', () => {
    render(<Footer />)
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
  })
})
