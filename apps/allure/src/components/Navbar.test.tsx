import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo, nav links, and portfolio CTA', () => {
    render(<Navbar />)
    const banner = screen.getByRole('banner')
    expect(banner).toBeInTheDocument()

    const logo = screen.getByRole('link', { name: /allure/i })
    expect(logo).toHaveTextContent(/allure/i)

    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About us', 'Models', 'News', 'Contact']) {
      expect(withinNav(nav, label)).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: /submit your portfolio/i })).toBeInTheDocument()
  })

  it('highlights the active (first) nav link with the brand block', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    const home = withinNav(nav, 'Home')
    expect(home).toHaveClass('bg-brand')
    const about = withinNav(nav, 'About us')
    expect(about).not.toHaveClass('bg-brand')
  })

  it('opens and closes the fullscreen mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)

    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toBeInTheDocument()
    for (const label of ['Home', 'About us', 'Models', 'News', 'Contact']) {
      expect(withinNav(mobile, label)).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /submit your portfolio/i })).toHaveLength(2)

    const closeButtons = screen.getAllByRole('button', { name: 'Close menu' })
    expect(closeButtons).toHaveLength(2)
    expect(closeButtons[0]).toHaveAttribute('aria-expanded', 'true')

    await user.click(closeButtons[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

function withinNav(nav: HTMLElement, label: string) {
  return Array.from(nav.querySelectorAll('a')).find((a) => a.textContent?.includes(label))!
}
