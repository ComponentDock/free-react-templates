import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About widget with a green dot and the Connect social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /About Fiscale/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
    const socials = ['instagram', 'twitter', 'facebook', 'linkedin', 'pinterest', 'dribbble']
    for (const name of socials) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders the Links and Company columns with five links each', () => {
    render(<Footer />)
    for (const heading of ['Links', 'Company']) {
      const column = screen.getByRole('heading', { name: heading }).closest('div')!
      expect(within(column).getAllByRole('link').length).toBeGreaterThanOrEqual(5)
      expect(within(column).getByRole('link', { name: 'About us' })).toBeInTheDocument()
      expect(within(column).getByRole('link', { name: 'Careers' })).toBeInTheDocument()
    }
  })

  it('shows the address, phone numbers, and email with proper hrefs', () => {
    render(<Footer />)
    expect(screen.getByText('43 Raymouth Rd. Baltemoer, London 3910')).toBeInTheDocument()
    const phones = screen.getAllByRole('link', { name: '+1 (123) 456-7890' })
    expect(phones.length).toBeGreaterThanOrEqual(1)
    for (const phone of phones) {
      expect(phone).toHaveAttribute('href', 'tel:+11234567890')
    }
    const email = screen.getByRole('link', { name: 'info@mydomain.com' })
    expect(email).toHaveAttribute('href', 'mailto:info@mydomain.com')
  })

  it('credits Component Dock in the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
