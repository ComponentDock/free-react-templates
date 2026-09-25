import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCTA } from './ContactCTA'

describe('ContactCTA', () => {
  it('renders the heading', () => {
    render(<ContactCTA />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Contact For RSVP')
  })

  it('renders the Contact Me button as a link', () => {
    render(<ContactCTA />)
    const link = screen.getByRole('link', { name: 'Contact Me' })
    expect(link).toHaveAttribute('href', 'mailto:hello@stave.com')
  })

  it('has the contact section with correct id', () => {
    render(<ContactCTA />)
    expect(document.getElementById('contact')).toBeInTheDocument()
  })

  it('shows descriptive text', () => {
    render(<ContactCTA />)
    expect(screen.getByText(/Have questions or want to book/)).toBeInTheDocument()
  })
})
