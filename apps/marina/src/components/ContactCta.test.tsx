import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCta } from './ContactCta'

describe('ContactCta', () => {
  it('renders the heading, paragraph and Contact Us action', () => {
    render(<ContactCta />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Get In Touch With Us' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '#booking')
    expect(screen.getByText(/Far far away/)).toBeInTheDocument()
  })
})
