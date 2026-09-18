import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Cirrus')).toBeInTheDocument()
  })

  it('renders about paragraph', () => {
    render(<Footer />)
    expect(screen.getByText(/behind the word mountains/)).toBeInTheDocument()
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Leadership')).toBeInTheDocument()
  })

  it('renders Navigational column', () => {
    render(<Footer />)
    expect(screen.getByText('Navigational')).toBeInTheDocument()
    expect(screen.getByText('Join Us')).toBeInTheDocument()
    expect(screen.getByText('Privacy & Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms & Condition')).toBeInTheDocument()
  })

  it('renders Office contact details', () => {
    render(<Footer />)
    expect(screen.getByText('Office')).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
