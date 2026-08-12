import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name, a Home link and the section links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Atelier' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    for (const label of ['Categories', 'New Products', 'Trend', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles the dark class on the document root', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle dark mode' })
    expect(document.documentElement).not.toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')

    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens the mobile menu and closes it when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(screen.getAllByRole('link', { name: 'Categories' })).toHaveLength(1)

    await user.click(menuButton)
    expect(screen.getAllByRole('link', { name: 'Categories' })).toHaveLength(2)

    const mobileLink = screen.getAllByRole('link', { name: 'Trend' })[1]!
    mobileLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileLink)
    expect(screen.getAllByRole('link', { name: 'Trend' })).toHaveLength(1)
  })
})
