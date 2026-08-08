import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('renders the brand, section links, and dark-mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByText('Facet')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Projects', 'Team', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Request a quote' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /dark mode/i })).toBeInTheDocument()
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    expect(screen.getByRole('button', { name: /light mode/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /light mode/i }))
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    for (const label of ['Home', 'About', 'Projects', 'Team', 'Blog', 'Contact']) {
      expect(within(menu).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(menu).getByRole('link', { name: 'Request a quote' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    await user.click(within(menu).getByRole('link', { name: 'Projects' }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the quote link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    await user.click(within(menu).getByRole('link', { name: 'Request a quote' }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })
})
