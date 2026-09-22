import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo with the brand name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Sportium/ })).toHaveAttribute('href', '#home')
  })

  it('renders all desktop navigation links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About Us', 'Classes & Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('652-345 3222 11')).toBeInTheDocument()
  })
})
