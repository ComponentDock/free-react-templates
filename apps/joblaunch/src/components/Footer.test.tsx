import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders column headings', () => {
    render(<Footer />)
    expect(screen.getByText('For Candidates')).toBeInTheDocument()
    expect(screen.getByText('For Employers')).toBeInTheDocument()
    expect(screen.getByText('Archives')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('Browse Jobs')).toBeInTheDocument()
    expect(screen.getByText('Post A Job')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 8901')).toBeInTheDocument()
    expect(screen.getByText('info@joblaunch.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright/)).toBeInTheDocument()
  })
})
