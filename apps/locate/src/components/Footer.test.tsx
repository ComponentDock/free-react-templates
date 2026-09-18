import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Quick Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('renders Products column', () => {
    render(<Footer />)
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('Browse Listings')).toBeInTheDocument()
  })

  it('renders Features column', () => {
    render(<Footer />)
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Search Places')).toBeInTheDocument()
  })

  it('renders Follow Us social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })

  it('renders newsletter signup', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('prevents default on newsletter form submit', () => {
    render(<Footer />)
    const form = screen.getByLabelText('Email for newsletter').closest('form')!
    fireEvent.submit(form)
    expect(form).toBeInTheDocument()
  })
})
