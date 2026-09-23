import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer sections with links and contact info', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Practice Area' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText(/43 Raymouth Rd/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+1(123)-456-7890' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@litigator.com' })).toBeInTheDocument()
  })
})
