import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo with Reckoner text and dollar sign', () => {
    render(<Navbar />)

    expect(screen.getByText('Reckoner')).toBeInTheDocument()
    expect(screen.getByText('$')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders social media icons with proper links', () => {
    render(<Navbar />)

    const facebookLink = screen.getByLabelText('Facebook')
    expect(facebookLink).toHaveAttribute('href', 'https://facebook.com')
    expect(facebookLink).toHaveAttribute('target', '_blank')

    const twitterLink = screen.getByLabelText('Twitter')
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com')
    expect(twitterLink).toHaveAttribute('target', '_blank')

    const linkedinLink = screen.getByLabelText('LinkedIn')
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
  })

  it('Services link has a dropdown arrow', () => {
    render(<Navbar />)

    const servicesLink = screen.getByRole('link', { name: /services/i })
    expect(servicesLink).toBeInTheDocument()
    expect(servicesLink.querySelector('svg')).toBeInTheDocument()
  })

  it('has proper ARIA labels', () => {
    render(<Navbar />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
  })
})
