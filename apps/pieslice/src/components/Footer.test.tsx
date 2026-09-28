import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)

    expect(screen.getByText('481 Creekside Lane, Avila Beach, CA 93424')).toBeInTheDocument()
    expect(screen.getByText('+53 345 7953 32453')).toBeInTheDocument()
    expect(screen.getByText('yourmail@gmail.com')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Pinterest' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Dribbble' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Vimeo' })).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)

    const dockLinks = screen.getAllByRole('link', { name: 'Component Dock' })
    expect(dockLinks.length).toBeGreaterThanOrEqual(1)
    for (const link of dockLinks) {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    }
  })

  it('renders the logo linking to home', () => {
    render(<Footer />)

    const logo = screen.getByRole('link', { name: 'Pieslice' })
    expect(logo).toHaveAttribute('href', '#home')
  })
})
