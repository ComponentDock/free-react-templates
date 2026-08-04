import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows contact details, service links, quick links, socials, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Link' })).toBeInTheDocument()
    expect(screen.getByText('Pet Insurance')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })
})
