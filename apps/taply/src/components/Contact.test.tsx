import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import { contact, phoneHref } from '../data'

describe('Contact', () => {
  it('renders the address, email and phone with real links', () => {
    render(<Contact />)

    expect(screen.getByText(contact.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    )
    const phoneLink = screen.getByRole('link', { name: contact.phoneDisplay })
    expect(phoneLink).toHaveAttribute('href', phoneHref(contact.phoneDisplay))
    expect(phoneLink.getAttribute('href')).toBe('tel:51836362800')
  })

  it('renders the social icon links', () => {
    render(<Contact />)

    expect(screen.getByRole('link', { name: 'Taply on facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Taply on twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Taply on instagram' })).toBeInTheDocument()
  })
})
