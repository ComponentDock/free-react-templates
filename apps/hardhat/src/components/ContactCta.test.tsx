import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders the heading, description, and contact button', () => {
    render(<ContactCta />)

    expect(screen.getByRole('heading', { name: "Let's talk with us" })).toBeInTheDocument()
    expect(screen.getByText(/Heaven fruitful/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })
})
