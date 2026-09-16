import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders company name', () => {
    render(<Footer />)
    expect(screen.getByText('Reframe')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('34 Street Name, City Name, United States')).toBeInTheDocument()
    expect(screen.getByText('+1 242 4942 290')).toBeInTheDocument()
    expect(screen.getByText('info@reframe.com')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByText('Social')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('does not contain ColorLib references', () => {
    render(<Footer />)
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })

  it('renders with custom className', () => {
    render(<Footer className="extra" />)
    expect(screen.getByTestId('footer').className).toContain('extra')
  })
})
