import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name and the link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: /^Pump$/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Recent Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('shows the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Pump/)).toBeInTheDocument()
  })
})
