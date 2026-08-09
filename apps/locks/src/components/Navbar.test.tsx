import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and a Home link pointing to the page root', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /locks/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute('href', '#home')
  })

  it('toggles the dark class on the document root when the toggle is pressed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /toggle dark mode/i })
    expect(document.documentElement).not.toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).toHaveClass('dark')
    await user.click(toggle)
    expect(document.documentElement).not.toHaveClass('dark')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(openButton)
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: /about/i }))
    expect(screen.queryByRole('navigation', { name: /mobile/i })).not.toBeInTheDocument()
  })
})
