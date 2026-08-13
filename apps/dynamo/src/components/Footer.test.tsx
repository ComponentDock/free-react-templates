import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about column with social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Dynamo' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Behance' })).toBeInTheDocument()
  })

  it('renders the Useful Resources and Our Solutions link columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Useful Resources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Solutions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Jobs Vacancies' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Metal Industry' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About our Work' })).toBeInTheDocument()
  })

  it('renders the Contact Us column with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByText('Main Str, no 23')).toBeInTheDocument()
    expect(screen.getByText('+546 990221 123')).toBeInTheDocument()
    expect(screen.getByText('hello@dynamo.com')).toBeInTheDocument()
  })

  it('renders the bottom bar with copyright and footer menu', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<Footer />)
    const dock = screen.getByRole('link', { name: /component dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
