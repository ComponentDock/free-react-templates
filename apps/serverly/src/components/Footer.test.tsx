import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the gradient phone bar with the 24/7 label and phone number', () => {
    render(<Footer />)
    expect(screen.getByText('Need Help? Call Us 24/7')).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: '652-345 3222 11' })
    expect(phone).toHaveAttribute('href', 'tel:652345322211')
  })

  it('renders the three link columns with their headings and links', () => {
    render(<Footer />)
    for (const title of ['Hosting Packages', 'Our Services', 'Useful Links']) {
      expect(screen.getByRole('navigation', { name: title })).toBeInTheDocument()
    }
    for (const link of [
      'Cloud Hosting',
      'Reseller Hosting',
      'Dedicated Servers',
      'Windows Hosting',
      'Web Design',
      'Domains Register',
      'Email Marketing',
      'Testimonials',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the footer logo, contact info, payment cards and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Serverly home' })).toBeInTheDocument()
    expect(screen.getByText('1481 Creekside Lane, Avila Beach, CA 931')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+53 345 7953 32453' })).toHaveAttribute(
      'href',
      'tel:+53345795332453',
    )
    expect(screen.getByRole('link', { name: 'yourmail@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:yourmail@gmail.com',
    )
    for (const card of ['VISA', 'Mastercard', 'PayPal', 'Amex', 'Discover']) {
      expect(screen.getByText(card)).toBeInTheDocument()
    }
    for (const social of ['Facebook', 'Twitter', 'Google', 'Instagram']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
  })

  it('shows the copyright bar with the repo-standard credit', () => {
    render(<Footer />)
    expect(
      screen.getByText(/All rights reserved \| This template is made with React/),
    ).toBeInTheDocument()
  })
})
