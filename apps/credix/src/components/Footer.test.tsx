import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Solutions' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Our Loans' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders footer news items', () => {
    render(<Footer />)
    expect(screen.getByText('How to get the best loan?')).toBeInTheDocument()
    expect(screen.getByText('A new way to get a loan')).toBeInTheDocument()
    expect(screen.getByText('Finance your home')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright logo', () => {
    render(<Footer />)
    expect(screen.getByText('Credix')).toBeInTheDocument()
  })
})
