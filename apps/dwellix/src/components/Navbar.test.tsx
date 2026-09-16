import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/DWELL/)).toBeInTheDocument()
    expect(screen.getByText(/IX/)).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Pages/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Rent' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Agents' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
  })

  it('renders Contact Us button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Contact Us').length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openBtn)
    const closeBtn = screen.getByRole('button', { name: 'Close menu' })
    await user.click(closeBtn)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
