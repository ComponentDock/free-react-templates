import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the university name', () => {
    render(<Footer />)
    expect(screen.getByText('Scholarly University')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Academics')).toBeInTheDocument()
    expect(screen.getByText('Admissions')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 University Ave')).toBeInTheDocument()
    expect(screen.getByText('info@scholarly.edu')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/2024 Scholarly University/)).toBeInTheDocument()
  })

  it('has a dark navy background', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-navy-900')
  })
})
