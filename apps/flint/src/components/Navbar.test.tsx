import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the site name and the desktop navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Flint' })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About us', 'Dropdown', 'Our products', 'Features', 'Blog']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('exposes the dropdown menu and its nested sub menu', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Menu Three' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu One' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Two' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()
  })

  it('opens the mobile panel from the toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()

    await user.click(toggle)

    const panel = screen.getByTestId('mobile-menu')
    expect(panel).toBeVisible()
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(within(panel).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(panel).getByRole('link', { name: 'Sub Menu Three' })).toBeInTheDocument()
  })

  it('closes the mobile panel from the close control', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close navigation' }))

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('closes the mobile panel when a link inside it is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const panel = screen.getByTestId('mobile-menu')
    const link = within(panel).getByRole('link', { name: 'Blog' })
    link.addEventListener('click', (event) => event.preventDefault(), { once: true })

    await user.click(link)

    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })
})
