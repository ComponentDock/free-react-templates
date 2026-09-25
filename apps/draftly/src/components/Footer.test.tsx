import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright with year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer column headings', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getAllByText('Services').length).toBeGreaterThanOrEqual(1)
  })
})
