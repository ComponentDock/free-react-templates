import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Roastery')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /^Menu$/i })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: /Blog/i })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: /Contact/i })).toHaveAttribute('href', '#contact')
  })

  it('renders the View Menu button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /View Menu/i })).toHaveAttribute('href', '#menu')
  })

  it('toggles dark mode when the dark mode button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /Toggle dark mode/i })
    expect(button).toHaveTextContent('☾')
    await user.click(button)
    expect(button).toHaveTextContent('☀')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuButton = screen.getByRole('button', { name: /Open menu/i })
    await user.click(menuButton)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    const closeButton = screen.getByRole('button', { name: /Close menu/i })
    await user.click(closeButton)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    const mobileLinks = screen.getByLabelText('Mobile')
    const aboutLink = mobileLinks.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})
