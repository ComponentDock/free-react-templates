import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ContactInfo } from './ContactInfo'
import { contact } from '../data'

describe('ContactInfo', () => {
  it('renders the contact heading and details', () => {
    render(<ContactInfo />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText(contact.address)).toBeInTheDocument()
    expect(screen.getByText(contact.phone)).toBeInTheDocument()
    expect(screen.getByText(contact.email)).toBeInTheDocument()
  })
})
