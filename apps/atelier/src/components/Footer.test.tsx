import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Atelier')).toBeInTheDocument()
  })

  it('renders the about description', () => {
    render(<Footer />)
    expect(screen.getByText(/creative agency crafting/)).toBeInTheDocument()
  })

  it('renders all navigation column headers', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
  })

  it('renders social media links with correct labels', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toHaveAttribute(
      'href',
      'https://facebook.com',
    )
    expect(screen.getByRole('link', { name: 'Dribbble' })).toHaveAttribute(
      'href',
      'https://dribbble.com',
    )
  })

  it('renders the Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 All rights reserved/)).toBeInTheDocument()
  })
})
