import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo text GYMBOX', () => {
    render(<Header />)
    expect(screen.getAllByText('GYMBOX').length).toBeGreaterThanOrEqual(1)
  })

  it('renders navigation links in the nav element', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).toBeInTheDocument()
    const links = within(nav).getAllByRole('link')
    const linkTexts = links.map((l) => l.textContent?.trim())
    expect(linkTexts).toContain('Home')
    expect(linkTexts).toContain('About')
    expect(linkTexts).toContain('Pricing')
    expect(linkTexts).toContain('Gallery')
    expect(linkTexts).toContain('Contact')
  })

  it('renders Join Us button', () => {
    render(<Header />)
    const joinButtons = screen.getAllByText('Join Us')
    expect(joinButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    const mobileLinks = within(nav).getAllByRole('link')
    const mobileHomeLink = mobileLinks.find(
      (l) => l.textContent?.trim() === 'Home' && l.className.includes('block'),
    )
    expect(mobileHomeLink).toBeDefined()
    await user.click(mobileHomeLink!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when Join Us is clicked on mobile', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    const joinUsLinks = within(nav).getAllByText('Join Us')
    const mobileJoinUs = joinUsLinks.find((l) => l.className.includes('block'))
    expect(mobileJoinUs).toBeDefined()
    await user.click(mobileJoinUs!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
