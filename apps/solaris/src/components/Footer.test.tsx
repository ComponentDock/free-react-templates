import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/©.*Solaris/)).toBeInTheDocument()
  })

  it('renders a pulsing heart icon', () => {
    render(<Footer />)
    expect(screen.getByText('♥')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the Solaris logo centered', () => {
    render(<Footer />)
    const logo = screen.getAllByText('Solaris')
    expect(logo.length).toBeGreaterThanOrEqual(1)
  })

  it('has a separator above the footer', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
