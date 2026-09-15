import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about section', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText(/health information and prevention/i)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Prevention')).toBeInTheDocument()
    expect(screen.getByText('Symptoms')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders helpful links', () => {
    render(<Footer />)
    expect(screen.getByText('Helpful Links')).toBeInTheDocument()
    expect(screen.getByText('World Health Organization')).toBeInTheDocument()
    expect(screen.getByText('CDC Guidelines')).toBeInTheDocument()
    expect(screen.getByText('Local Health Department')).toBeInTheDocument()
    expect(screen.getByText('Emergency Services')).toBeInTheDocument()
  })

  it('renders resources', () => {
    render(<Footer />)
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('COVID-19 FAQ')).toBeInTheDocument()
    expect(screen.getByText('Mental Health Support')).toBeInTheDocument()
    expect(screen.getByText('Financial Assistance')).toBeInTheDocument()
    expect(screen.getByText('Volunteer Opportunities')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
