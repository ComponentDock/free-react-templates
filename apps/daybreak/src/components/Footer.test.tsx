import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders the Daybreak logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Daybreak' })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    for (const name of ['Twitter', 'LinkedIn', 'Dribbble', 'Instagram']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
