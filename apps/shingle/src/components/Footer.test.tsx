import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and services list', () => {
    render(<Footer />)
    expect(screen.getByText('Shingle')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
  })

  it('shows business hours section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Business Hours' })).toBeInTheDocument()
    expect(screen.getByText('Monday – Friday: 9am to 8pm')).toBeInTheDocument()
    expect(screen.getByText('Saturday: 9am to 5pm')).toBeInTheDocument()
  })

  it('shows contact information', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact Information' })).toBeInTheDocument()
    expect(screen.getByText('+1 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@shingle.com')).toBeInTheDocument()
  })

  it('has the section id contact', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('#contact')).toBeInTheDocument()
  })

  it('links to Component Dock in the copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
