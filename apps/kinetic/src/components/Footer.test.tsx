import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, expect, it } from 'vitest'

describe('Footer', () => {
  it('renders Kinetic logo', () => {
    render(<Footer />)
    expect(screen.getByText('Kinetic')).toBeInTheDocument()
  })

  it('renders address, email, and phone info', () => {
    render(<Footer />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Email Address')).toBeInTheDocument()
    expect(screen.getByText('Phone Number')).toBeInTheDocument()
  })

  it('renders email links', () => {
    render(<Footer />)
    expect(screen.getByText('info@kinetic.com')).toHaveAttribute('href', 'mailto:info@kinetic.com')
    expect(screen.getByText('support@kinetic.com')).toHaveAttribute(
      'href',
      'mailto:support@kinetic.com',
    )
  })

  it('renders phone links', () => {
    render(<Footer />)
    expect(screen.getByText('012 4562 982 3612')).toHaveAttribute('href', 'tel:01245629823612')
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { hidden: true })
    const facebookLink = socialLinks.find((l) => l.getAttribute('aria-label') === 'Facebook')
    expect(facebookLink).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })
})
