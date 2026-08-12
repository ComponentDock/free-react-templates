import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 2, name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('renders the Links and Services lists', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Services', 'Projects', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Data Analysis' })).toBeInTheDocument()
  })

  it('renders the contact details and social icons', () => {
    render(<Footer />)
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the copyright bar with the credit line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByText(/by Maverick/)).toBeInTheDocument()
  })
})
