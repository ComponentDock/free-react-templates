import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand and blurb', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Coursely home/ })).toBeInTheDocument()
    expect(screen.getByText(/Learn without limits/)).toBeInTheDocument()
  })

  it('shows the three link columns', () => {
    render(<Footer />)

    for (const heading of ['Categories', 'Company', 'Support']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    for (const link of [
      'Web Development',
      'Data Science',
      'UI/UX Design',
      'Business',
      'About Us',
      'Careers',
      'Blog',
      'Press',
      'Help Center',
      'Contact Us',
      'Terms of Service',
      'Privacy Policy',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the copyright and cookie notice', () => {
    render(<Footer />)

    expect(screen.getByText(/Coursely. All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/We use cookies to improve your experience/)).toBeInTheDocument()
  })
})
