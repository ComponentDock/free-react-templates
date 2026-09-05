import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Structura')).toBeInTheDocument()
  })

  it('renders navigation links in desktop nav', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /Primary/i })
    expect(nav).toBeInTheDocument()
    const links = nav.querySelectorAll('a')
    const texts = Array.from(links).map((a) => a.textContent?.trim())
    expect(texts).toContain('Home')
    expect(texts).toContain('About')
    expect(texts).toContain('Projects')
    expect(texts).toContain('Services')
    expect(texts).toContain('Contact')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(toggle).toHaveAttribute('aria-label', 'Close menu')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: /Mobile/i })
    const mobileLink = mobileNav.querySelector('a')
    if (mobileLink) {
      await user.click(mobileLink)
    }
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
