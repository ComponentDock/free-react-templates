import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('FinPilot')).toBeInTheDocument()
  })

  it('renders brand description', () => {
    render(<Footer />)
    expect(screen.getByText(/Sed ut perspiciatis/)).toBeInTheDocument()
  })

  it('renders Services column', () => {
    render(<Footer />)
    expect(screen.getByText('Business Planning')).toBeInTheDocument()
    expect(screen.getByText('Financial Advisory')).toBeInTheDocument()
    expect(screen.getByText('Tax Optimization')).toBeInTheDocument()
    expect(screen.getByText('Risk Management')).toBeInTheDocument()
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    // 'Services' appears as both a heading and a link
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Address information', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Business Avenue/)).toBeInTheDocument()
    expect(screen.getByText(/New York, NY 10001/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} FinPilot`))).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders contact links', () => {
    render(<Footer />)
    expect(screen.getByText('info@finpilot.com')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
  })
})
