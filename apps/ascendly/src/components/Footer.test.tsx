import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, contact column and the duplicated link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'ASCENDLY' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('hello@mydomain.com')).toBeInTheDocument()
    expect(screen.getByText('+1 829 2293 382')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()

    // The original repeats this link column twice — keep the duplication.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Services' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'About Us' })).toHaveLength(2)
  })

  it('renders five social icons and the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Skype' })).toBeInTheDocument()

    expect(screen.getByText(/© \d{4} Ascendly\. All rights reserved\./)).toBeInTheDocument()
  })
})
