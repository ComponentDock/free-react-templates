import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Craft')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'About', 'Services', 'Experiences', 'Works', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle navigation/i })

    // Menu closed initially on desktop — links visible via desktop nav
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /toggle navigation/i })

    // Open mobile menu
    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')

    // Get a mobile link (the second "About" in the DOM — the mobile one)
    const mobileLinks = screen.getAllByText('About')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!

    // Prevent jsdom hash-navigation race (see docs/ai-context.md)
    mobileLink.addEventListener('click', (e) => e.preventDefault(), { once: true })

    await user.click(mobileLink)

    // Menu should close
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('has correct section link hrefs', () => {
    render(<Navbar />)
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveAttribute('href', '#about')
  })
})
