import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Closet')).toBeInTheDocument()
  })

  it('renders customer care links', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Returns/Exchange')).toBeInTheDocument()
  })

  it('renders information links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('+1 912-252-7350')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('has a back to top link', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Back to top')).toBeInTheDocument()
  })
})
