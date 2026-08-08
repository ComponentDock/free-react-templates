import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, contact details, social links, and copyright', () => {
    render(<Footer />)

    const home = screen.getByRole('navigation', { name: 'Home links' })
    expect(within(home).getByRole('link', { name: 'About us' })).toBeInTheDocument()

    const practice = screen.getByRole('navigation', { name: 'Practice area links' })
    expect(within(practice).getByRole('link', { name: 'Architect' })).toBeInTheDocument()

    const services = screen.getByRole('navigation', { name: 'Service links' })
    expect(within(services).getByRole('link', { name: 'House Renovation' })).toBeInTheDocument()

    expect(screen.getByText(/43 Raymouth Rd/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1(123)-456-7890' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@mydomain.com' })).toBeInTheDocument()

    for (const label of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
