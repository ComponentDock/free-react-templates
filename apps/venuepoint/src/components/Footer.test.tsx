import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the restaurant logo', () => {
    render(<Footer />)
    expect(screen.getByText('The Venue')).toBeInTheDocument()
    expect(screen.getByText('restaurant')).toBeInTheDocument()
  })

  it('renders the About Us section', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders Contact Info with address, phone, and email', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText('481 Creekside Lane, Avila CA 93424')).toBeInTheDocument()
    expect(screen.getByText('+53 345 7953 32453')).toBeInTheDocument()
    expect(screen.getByText('yourmail@gmail.com')).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the "More templates at" text', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeInTheDocument()
  })

  it('renders phone and email as links', () => {
    render(<Footer />)
    expect(screen.getByText('+53 345 7953 32453')).toHaveAttribute('href', 'tel:+53345795332453')
    expect(screen.getByText('yourmail@gmail.com')).toHaveAttribute(
      'href',
      'mailto:yourmail@gmail.com',
    )
  })
})
