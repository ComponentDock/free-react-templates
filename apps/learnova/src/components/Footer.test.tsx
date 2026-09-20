import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getAllByText('LEARNOVA').length).toBeGreaterThan(0)
  })

  it('renders the about description', () => {
    render(<Footer />)
    expect(screen.getByText(/Dedicated to providing/)).toBeInTheDocument()
  })

  it('renders the programs column', () => {
    render(<Footer />)
    expect(screen.getByText('Programs')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
  })

  it('renders the support column', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders the community column', () => {
    render(<Footer />)
    expect(screen.getByText('Community')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
