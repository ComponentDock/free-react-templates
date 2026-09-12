import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Tavern')).toBeInTheDocument()
  })

  it('renders desktop nav links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Menu', 'Services', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('sets aria-expanded on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a mobile nav link (the first "Home" in the mobile dropdown)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
