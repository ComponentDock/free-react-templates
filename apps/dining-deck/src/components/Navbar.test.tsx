import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'DiningDeck' })).toBeInTheDocument()
    const desktopNav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About Us', 'Menu', 'Reservation', 'Contacts']) {
      expect(within(desktopNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toHaveClass('block')
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(mobileNav).toHaveClass('hidden')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const aboutLink = within(mobileNav).getByRole('link', { name: 'About Us' })
    await user.click(aboutLink)
    expect(mobileNav).toHaveClass('hidden')
  })
})
