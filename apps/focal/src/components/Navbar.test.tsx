import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Focal')).toBeInTheDocument()
  })

  it('renders the hamburger button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument()
  })

  it('opens the side nav when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(hamburger)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeVisible()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('closes the side nav when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(hamburger)

    // Close via overlay
    const overlay = screen.getByRole('presentation')
    await user.click(overlay)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toHaveClass(
      'translate-x-full',
    )
  })

  it('closes the side nav when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(hamburger)

    // Click a link
    const workLink = screen.getByText('Work')
    await user.click(workLink)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toHaveClass(
      'translate-x-full',
    )
  })

  it('closes side nav when View Galleries ButtonLink is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(hamburger)

    // Click View Galleries
    const viewGalleries = screen.getByText('View Galleries')
    await user.click(viewGalleries)

    expect(screen.getByRole('navigation', { name: /main navigation/i })).toHaveClass(
      'translate-x-full',
    )
  })

  it('renders search input in side nav', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open navigation menu/i })
    await user.click(hamburger)

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })
})
