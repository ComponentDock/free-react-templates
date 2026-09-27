import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand and all nav links', () => {
    render(<Navbar />)

    expect(screen.getByText('Airy')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Work', 'Pricing', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open the menu first
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Click a nav link — should close the menu
    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
