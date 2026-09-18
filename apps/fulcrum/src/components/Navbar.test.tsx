import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Fulcrum')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('has a mobile menu toggle button', () => {
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(btn).toBeInTheDocument()
  })

  it('opens and closes mobile menu on toggle', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })

    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    const mobileNav = screen.getByLabelText('Mobile navigation')
    const aboutLink = mobileNav.querySelectorAll('a')[1]!
    await user.click(aboutLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
