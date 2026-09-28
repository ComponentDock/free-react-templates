import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders Polenta Restaurant in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Polenta Restaurant/)).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(cdLink).toHaveAttribute('target', '_blank')
    expect(cdLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Menu', 'Reservation', 'Gallery', 'Events', 'Contact']
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    })
  })
})
