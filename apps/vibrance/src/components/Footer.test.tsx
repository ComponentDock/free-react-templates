import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders office locations', () => {
    render(<Footer />)
    expect(screen.getByText('Barcelona Office')).toBeInTheDocument()
    expect(screen.getByText('New York Office')).toBeInTheDocument()
    expect(screen.getByText('Melbourne Office')).toBeInTheDocument()
  })

  it('renders Vibrance brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Vibrance')).toBeInTheDocument()
  })

  it('renders office addresses', () => {
    render(<Footer />)
    expect(screen.getByText('C/Libertad, 34, 05200 Arevalo')).toBeInTheDocument()
    const emails = screen.getAllByText('hello@company.com')
    expect(emails.length).toBeGreaterThanOrEqual(1)
  })
})
