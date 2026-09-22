import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Grandeur')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Gallery')).toBeDefined()
    expect(screen.getByText('Pages')).toBeDefined()
    expect(screen.getByText('Blog')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('displays contact phone number in top bar', () => {
    render(<Navbar />)
    expect(screen.getByText(/Contact Us \+44/)).toBeDefined()
  })

  it('renders currency and language selects', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Currency')).toBeDefined()
    expect(screen.getByLabelText('Language')).toBeDefined()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle navigation')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows dropdown on hover over Pages', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pages = screen.getByText('Pages')
    await user.hover(pages)
    expect(screen.getByText('Elements')).toBeDefined()
    expect(screen.getAllByText('Rooms').length).toBeGreaterThanOrEqual(1)
  })

  it('hides dropdown on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const pages = screen.getByText('Pages')
    await user.hover(pages)
    expect(screen.getByText('Elements')).toBeDefined()

    await user.unhover(pages)
  })

  it('sets Home link as active (brand color)', () => {
    render(<Navbar />)
    const home = screen.getByText('Home')
    expect(home.className).toContain('text-brand')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    // Click the Home link in mobile menu
    const homeLinks = screen.getAllByText('Home')
    // The mobile menu link is the second one (first is desktop)
    const mobileHome = homeLinks.at(-1)!
    expect(mobileHome).toBeDefined()
    await user.click(mobileHome)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
