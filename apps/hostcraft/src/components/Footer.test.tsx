import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders CTA banner', () => {
    render(<Footer />)
    expect(screen.getByText('Sign Up For Web Hosting Today!')).toBeInTheDocument()
    expect(screen.getByText('$4.50/mo')).toBeInTheDocument()
    expect(screen.getByText('Get started now')).toBeInTheDocument()
  })

  it('renders footer columns', () => {
    render(<Footer />)
    expect(screen.getByText('Hostcraft')).toBeInTheDocument()
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Navigational')).toBeInTheDocument()
    expect(screen.getByText('Office')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders office info', () => {
    render(<Footer />)
    expect(screen.getByText('123 Hosting Street, Web City, WC 12345')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@hostcraft.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
