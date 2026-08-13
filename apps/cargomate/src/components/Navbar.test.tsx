import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the wordmark and desktop nav links with Home current', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'CARGOMATE' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Services' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'page')
  })

  it('renders the dropdown submenu items for Pages and Blog', () => {
    render(<Navbar />)

    expect(screen.getAllByRole('link', { name: 'Pages' })).toHaveLength(1)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2) // top link + dropdown item
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it after following a link', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Contact' })).toBeInTheDocument()

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' })[1]!
    expect(mobileContact).toBeInTheDocument()

    await user.click(mobileContact)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu after following a submenu item', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileElements = screen.getAllByRole('link', { name: 'Elements' })[1]!
    await user.click(mobileElements)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
