import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and all navigation links', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Keycraft' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()

    const links = ['Home', 'About', 'Services', 'Shop', 'News', 'Contact']
    for (const label of links) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+1 800 556 6688')).toBeInTheDocument()
  })

  it('toggles the mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const aboutLinks = screen.getAllByRole('link', { name: 'About' })
    await user.click(aboutLinks[1]!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
