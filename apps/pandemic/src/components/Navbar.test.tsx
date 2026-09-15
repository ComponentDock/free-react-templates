import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and desktop navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Pandemic')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Prevention')).toBeInTheDocument()
    expect(screen.getByText('Protect Yourself')).toBeInTheDocument()
    expect(screen.getByText('Symptoms')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('shows the hamburger button on mobile', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toBeInTheDocument()
  })

  it('opens and closes the mobile menu when toggled', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    // The mobile menu has <ul> with md:hidden class; find the "Home" link inside it
    const mobileUl = document.querySelector('ul.md\\:hidden')
    expect(mobileUl).toBeInTheDocument()
    const mobileLink = mobileUl!.querySelector('a')
    expect(mobileLink).toBeDefined()
    await user.click(mobileLink!)
    // Menu should have closed — hamburger shows "open" state
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('sets aria-expanded correctly', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
