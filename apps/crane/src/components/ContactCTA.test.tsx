import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCTA } from './ContactCTA'

describe('ContactCTA', () => {
  it('renders heading text', () => {
    render(<ContactCTA />)
    expect(screen.getByText(/Are you looking for a Construction/)).toBeInTheDocument()
  })

  it('renders Contact Us button', () => {
    render(<ContactCTA />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })
})
