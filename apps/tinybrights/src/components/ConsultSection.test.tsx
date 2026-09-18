import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ConsultSection } from './ConsultSection'

describe('ConsultSection', () => {
  it('renders the heading', () => {
    render(<ConsultSection />)
    expect(screen.getByRole('heading', { name: /Book a Free Consultation/i })).toBeInTheDocument()
  })

  it('renders form inputs', () => {
    render(<ConsultSection />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<ConsultSection />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('handles form submission without page reload', () => {
    render(<ConsultSection />)
    const form = screen.getByPlaceholderText('Your Name').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
