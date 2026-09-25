import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the BoldCraft logo', () => {
    render(<Footer />)
    expect(screen.getByText('BoldCraft')).toBeInTheDocument()
  })

  it("renders Let's Talk button", () => {
    render(<Footer />)
    expect(screen.getByText("Let's Talk")).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<Footer />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 BoldCraft/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { hidden: true })
    expect(socialLinks.length).toBeGreaterThanOrEqual(5)
  })
})
