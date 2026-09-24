import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Healix brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Healix' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('+1 234 567 8900')).toBeInTheDocument()
    expect(screen.getByText('info@healix.com')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<Footer />)
    expect(screen.getByText(/123 Medical Center Dr/)).toBeInTheDocument()
  })

  it('renders departments links', () => {
    render(<Footer />)
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Dental')).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()
  })

  it('has contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
