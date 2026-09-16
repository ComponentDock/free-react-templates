import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)
    expect(screen.getByText('Insight')).toBeInTheDocument()
    expect(screen.getByText(/Providing expert consulting/)).toBeInTheDocument()
  })

  it('renders Company and Services column headings', () => {
    render(<Footer />)
    expect(screen.getByText('Company', { selector: 'h4' })).toBeInTheDocument()
    expect(screen.getByText('Services', { selector: 'h4' })).toBeInTheDocument()
    expect(screen.getByText('Get in Touch', { selector: 'h4' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('+1 (234) 567-890')).toBeInTheDocument()
    expect(screen.getByText('info@insight.com')).toBeInTheDocument()
    expect(screen.getByText(/65\/A, 17th floor/)).toBeInTheDocument()
  })

  it('renders company and service links', () => {
    render(<Footer />)
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Strategic Planning')).toBeInTheDocument()
  })
})
