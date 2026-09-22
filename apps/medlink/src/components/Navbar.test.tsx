import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />)
  })

  it('renders the brand name MedLink', () => {
    expect(screen.getByText('MedLink')).toBeInTheDocument()
  })

  it('renders all desktop nav links', () => {
    const menubar = screen.getByRole('menubar')
    const links = [
      'Home',
      'About',
      'Features',
      'Doctors',
      'Departments',
      'Blog',
      'Pages',
      'Contact',
    ]
    links.forEach((link) => {
      expect(within(menubar).getByText(link)).toBeInTheDocument()
    })
  })

  it('renders the mobile toggle button with correct initial state', () => {
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles aria-expanded and aria-label on mobile menu button click', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('shows and hides mobile menu when toggle is clicked', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /open menu/i })
    const mobileMenu = screen.getByRole('menu')

    // Mobile menu should initially be hidden
    expect(mobileMenu).toHaveClass('hidden')

    await user.click(toggle)
    expect(mobileMenu).not.toHaveClass('hidden')

    await user.click(toggle)
    expect(mobileMenu).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    const mobileMenu = screen.getByRole('menu')
    expect(mobileMenu).not.toHaveClass('hidden')

    const homeLink = within(mobileMenu).getByText('Home')
    await user.click(homeLink)

    expect(mobileMenu).toHaveClass('hidden')
  })

  it('renders all nav links inside the mobile menu', async () => {
    const user = userEvent.setup()
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    const mobileMenu = screen.getByRole('menu')
    const links = [
      'Home',
      'About',
      'Features',
      'Doctors',
      'Departments',
      'Blog',
      'Pages',
      'Contact',
    ]
    links.forEach((link) => {
      expect(within(mobileMenu).getByText(link)).toBeInTheDocument()
    })
  })
})
