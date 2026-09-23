import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the CTA heading', () => {
    render(<Footer />)
    expect(screen.getByText("Let's work together!")).toBeInTheDocument()
  })

  it('renders the email', () => {
    render(<Footer />)
    expect(screen.getByText('office@template.com')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Pinterest')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('social links have correct href', () => {
    render(<Footer />)
    const socialLinks = [
      screen.getByLabelText('Pinterest'),
      screen.getByLabelText('Facebook'),
      screen.getByLabelText('Twitter'),
      screen.getByLabelText('Dribbble'),
    ]
    socialLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '#')
    })
  })
})
