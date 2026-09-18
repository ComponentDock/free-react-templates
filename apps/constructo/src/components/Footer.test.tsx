import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Company Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Building Construction')).toBeInTheDocument()
    expect(screen.getByText('Home Renovation')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('info@constructo.com')).toBeInTheDocument()
    expect(screen.getByText('+1 (168) 314 5016')).toBeInTheDocument()
    expect(screen.getByText(/123 Construction Ave/)).toBeInTheDocument()
  })

  it('renders about section', () => {
    render(<Footer />)
    expect(screen.getByText('About Our Company')).toBeInTheDocument()
  })

  it('renders copyright with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
