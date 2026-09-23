import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, section links, search button, and social links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /radiant/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'Features', 'Pricing', 'Services', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
  })

  it('search button is clickable', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const searchBtn = screen.getByRole('button', { name: 'Search' })
    await user.click(searchBtn)
    // Button should still be in the document after click
    expect(searchBtn).toBeInTheDocument()
  })
})
