import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the CTA heading', () => {
    render(<Footer />)
    expect(screen.getByText("Let's work together")).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Footer />)
    expect(screen.getByRole('button', { name: 'Get in touch' })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('does not reference ColorLib', () => {
    render(<Footer />)
    expect(screen.queryByText(/colorlib/i)).not.toBeInTheDocument()
  })
})
