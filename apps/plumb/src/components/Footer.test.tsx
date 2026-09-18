import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About, Pages, Resources, and Contact columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Pages' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders the contact info', () => {
    render(<Footer />)

    expect(screen.getByText('info@plumb.dev')).toBeInTheDocument()
    expect(screen.getByText('+1 222 212 3819')).toBeInTheDocument()
    expect(screen.getByText('43 Raymouth Rd. Baltemoer, London 3910')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Plumb`))).toBeInTheDocument()
  })

  it('links to Component Dock in the footer', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has the contentinfo landmark', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
