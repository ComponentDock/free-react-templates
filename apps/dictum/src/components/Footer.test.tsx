import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About').closest('a')).toHaveAttribute('href', '#about-section')
    expect(screen.getByText('Services').closest('a')).toHaveAttribute('href', '#services-section')
    expect(screen.getByText('Team').closest('a')).toHaveAttribute('href', '#team-section')
    expect(screen.getByText('Blog').closest('a')).toHaveAttribute('href', '#blog-section')
    expect(screen.getByText('Contact').closest('a')).toHaveAttribute('href', '#contact-section')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('233 Salonica, FL 32807')).toBeInTheDocument()
    expect(screen.getByText('+1 (123) 456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@dictum.com')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address for newsletter'), 'test@example.com')
    await user.click(screen.getByText('Subscribe'))
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Dictum/)).toBeInTheDocument()
  })
})
