import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Civicore logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /civicore/i })).toBeInTheDocument()
  })

  it('renders all navigation links in the desktop nav', () => {
    render(<Navbar />)
    const desktopNav = screen.getByRole('navigation', { name: /primary/i })
    expect(within(desktopNav).getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: /categories/i })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: /jobs/i })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(within(desktopNav).getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders the Sign Up button', () => {
    render(<Navbar />)
    expect(screen.getAllByText(/sign up/i).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    const homeLink = within(mobileNav).getByRole('link', { name: /home/i })
    await user.click(homeLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
