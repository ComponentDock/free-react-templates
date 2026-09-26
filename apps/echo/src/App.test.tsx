import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the sidebar, header, and all sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: /sidebar/i })).toBeInTheDocument()
    expect(screen.getAllByText('Echo').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText("Hello! I'm")).toBeInTheDocument()
    expect(screen.getByText(/Hi! I'm Echo/)).toBeInTheDocument()
    expect(screen.getByText('My services')).toBeInTheDocument()
    expect(screen.getByText('Checkout a few of my works')).toBeInTheDocument()
    expect(screen.getByText('I love to share my achievements')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    // The sidebar should have translate-x-0 class when open
    const sidebar = screen.getByRole('navigation', { name: /sidebar/i })
    expect(sidebar.className).toContain('translate-x-0')
  })

  it('closes mobile menu when close button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    const closeButton = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeButton)

    // Sidebar should have -translate-x-full class when closed
    const sidebar = screen.getByRole('navigation', { name: /sidebar/i })
    expect(sidebar.className).toContain('-translate-x-full')
  })

  it('closes mobile menu when overlay is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(menuButton)

    const overlay = document.querySelector('.fixed.inset-0.z-40')
    if (overlay) {
      await user.click(overlay)
    }

    const sidebar = screen.getByRole('navigation', { name: /sidebar/i })
    expect(sidebar.className).toContain('-translate-x-full')
  })
})
