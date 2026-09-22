import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact heading', () => {
    render(<Contact />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders address information', () => {
    render(<Contact />)
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText(/123 Hotel Street/)).toBeInTheDocument()
  })

  it('renders phone information', () => {
    render(<Contact />)
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
  })

  it('renders email information', () => {
    render(<Contact />)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('info@hotelbreeze.com')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Contact className="custom-class" />)
    expect(screen.getByText('Contact Us').closest('section')).toHaveClass('custom-class')
  })
})
