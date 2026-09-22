import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('RoxyGlow')).toBeDefined()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('Rooms')).toBeDefined()
    expect(screen.getByText('Restaurant')).toBeDefined()
    expect(screen.getByText('About')).toBeDefined()
    expect(screen.getByText('Blog')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
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

    const homeLinks = screen.getAllByText('Home')
    const mobileHome = homeLinks.at(-1)!
    await user.click(mobileHome)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
