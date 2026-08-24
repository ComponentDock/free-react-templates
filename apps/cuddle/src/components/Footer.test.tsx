import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer element', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders site logo link', () => {
    render(<Footer />)

    expect(screen.getAllByText(/CUDDLE/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders three column headings', () => {
    render(<Footer />)

    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders social links with aria-labels', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders recent posts', () => {
    render(<Footer />)

    const posts = screen.getAllByText('Ecological System Responsible for Green Energy')
    expect(posts).toHaveLength(2)
  })

  it('links Component Dock in copyright bar', () => {
    render(<Footer />)

    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
    expect(dockLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright text with current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year}.*Cuddle Charity`))).toBeInTheDocument()
  })

  it('links contact phone and email', () => {
    render(<Footer />)

    const phone = screen.getByText('+2 392 3929 210')
    expect(phone).toHaveAttribute('href', expect.stringContaining('tel:'))

    const email = screen.getByText('info@yourdomain.com')
    expect(email).toHaveAttribute('href', 'mailto:info@yourdomain.com')
  })
})
