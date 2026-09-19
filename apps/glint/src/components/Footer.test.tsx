import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Glint')).toBeInTheDocument()
  })

  it('renders services links', () => {
    render(<Footer />)
    expect(screen.getByText('Dental Implants')).toBeInTheDocument()
    expect(screen.getByText('Braces')).toBeInTheDocument()
    expect(screen.getByText('Wisdom Teeth')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<Footer />)
    expect(screen.getByText('Monday')).toBeInTheDocument()
    expect(screen.getAllByText('8:00am - 12:00pm').length).toBeGreaterThan(0)
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })
})
