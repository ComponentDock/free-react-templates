import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders link columns, contact details, social links, and copyright', () => {
    render(<Footer />)

    const links = screen.getByRole('navigation', { name: 'Links' })
    expect(within(links).getByRole('link', { name: 'Projects' })).toBeInTheDocument()

    const services = screen.getByRole('navigation', { name: 'Services' })
    expect(within(services).getByRole('link', { name: 'Architectural Design' })).toBeInTheDocument()

    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toBeInTheDocument()

    for (const label of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/recreation of ColorLib Square/)).toBeInTheDocument()
  })
})
