import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)

    expect(screen.getByText('Unfurl')).toBeInTheDocument()

    const links = [
      'Home',
      'Portfolio',
      'About',
      'Services',
      'Skills',
      'Testimonials',
      'Journal',
      'Contact',
    ]
    for (const label of links) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a mobile link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // The mobile menu links are inside a ul with class containing 'lg:hidden'
    // Find the "About" link inside the mobile menu (second occurrence)
    const aboutLinks = screen.getAllByText('About')
    // The mobile menu link is the one with the onClick handler (last one rendered in mobile menu)
    const mobileAbout = aboutLinks.at(-1)
    if (mobileAbout) await user.click(mobileAbout)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows dark mode toggle in mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggle = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(toggle)

    // The mobile dark mode toggle should show "Light mode" text (since dark starts true)
    expect(screen.getByText('Light mode')).toBeInTheDocument()

    // Click to toggle dark mode
    const mobileDarkBtn = screen.getByText('Light mode').closest('button')!
    await user.click(mobileDarkBtn)

    // Now it should show "Dark mode"
    expect(screen.getByText('Dark mode')).toBeInTheDocument()
  })

  it('toggles dark mode via desktop button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    // Component starts with dark=true, useEffect adds 'dark' class
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    const darkToggle = screen.getByRole('button', { name: /switch to light mode/i })
    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await user.click(darkToggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('has correct anchor links', () => {
    render(<Navbar />)

    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('href', '#home')

    const portfolioLink = screen.getByText('Portfolio')
    expect(portfolioLink).toHaveAttribute('href', '#portfolio')
  })
})
