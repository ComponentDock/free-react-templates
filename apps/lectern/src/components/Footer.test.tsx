import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Lectern brand', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Lectern' })).toBeInTheDocument()
  })

  it('renders useful links section', () => {
    render(<Footer />)
    expect(screen.getByText(/useful link/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
  })

  it('renders recent posts section', () => {
    render(<Footer />)
    expect(screen.getByText(/recent post/i)).toBeInTheDocument()
    expect(screen.getByText(/snackable study/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/40 baria street/i)).toBeInTheDocument()
    expect(screen.getByText(/111 555 666/)).toBeInTheDocument()
    expect(screen.getByText(/info@lectern.edu/)).toBeInTheDocument()
  })

  it('links to Component Dock in copyright', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
