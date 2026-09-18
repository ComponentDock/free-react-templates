import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactInfo } from './ContactInfo'
import { contact } from '../data'

describe('ContactInfo', () => {
  it('renders the heading, address, email, and phone', () => {
    render(<ContactInfo />)
    expect(screen.getByRole('heading', { level: 2, name: contact.heading })).toBeInTheDocument()
    expect(screen.getByText(contact.city)).toBeInTheDocument()
    expect(screen.getByText(contact.address)).toBeInTheDocument()
    expect(screen.getByText(contact.email)).toBeInTheDocument()
    expect(screen.getByText(contact.phone)).toBeInTheDocument()
  })

  it('renders the email as a mailto link', () => {
    render(<ContactInfo />)
    const emailLink = screen.getByText(contact.email)
    expect(emailLink).toHaveAttribute('href', `mailto:${contact.email}`)
  })

  it('renders the phone as a tel link', () => {
    render(<ContactInfo />)
    const phoneLink = screen.getByText(contact.phone)
    expect(phoneLink).toHaveAttribute('href', `tel:${contact.phone.replace(/[^+\d]/g, '')}`)
  })
})
