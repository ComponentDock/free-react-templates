import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and section links', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Cantilever')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Work', 'Services', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /dark mode/i })
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('navigation', { name: /mobile menu/i })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Work', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByRole('navigation', { name: /mobile menu/i })).toHaveTextContent(label)
    }
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const menu = screen.getByRole('navigation', { name: /mobile menu/i })
    await user.click(within(menu).getByRole('link', { name: /services/i }))
    expect(screen.queryByRole('navigation', { name: /mobile menu/i })).not.toBeInTheDocument()
  })
})
