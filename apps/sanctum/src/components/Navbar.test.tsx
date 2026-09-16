import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks, siteName } from '../data'

describe('Navbar', () => {
  it('renders the site name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText(siteName)).toBeInTheDocument()
    navLinks.forEach((link) => {
      expect(screen.getAllByText(link.label).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const aboutLink = mobileNav.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('sets aria-current on the active link', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByText('Home')
    const activeLink = homeLinks.find((el) => el.getAttribute('aria-current') === 'page')
    expect(activeLink).toBeInTheDocument()
    expect(activeLink).toHaveAttribute('aria-current', 'page')
  })
})
