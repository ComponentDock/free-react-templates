import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the MODISTA logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'MODISTA' })).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Pages', 'Shop', 'Blog', 'Lookbook', 'Contact']) {
      expect(screen.getByRole('button', { name: new RegExp(`^${link}`) })).toBeInTheDocument()
    }
  })

  it('has a mobile hamburger toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Mobile nav links should be visible
    const mobileHome = screen.getAllByText('Home')
    expect(mobileHome.length).toBeGreaterThan(0)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    // Click a mobile link (in the mobile menu section, not the desktop one)
    const blogLink = screen.getAllByText('Blog')[1]! // Second 'Blog' is in mobile menu
    await user.click(blogLink)

    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('shows dropdown items on hover for Home', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const homeBtn = screen.getByRole('button', { name: /^Home/ })
    await user.hover(homeBtn)

    expect(screen.getByRole('link', { name: 'Home Simple' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home Carousel' })).toBeInTheDocument()
  })

  it('hides dropdown items on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const homeBtn = screen.getByRole('button', { name: /^Home/ })
    await user.hover(homeBtn)
    expect(screen.getByRole('link', { name: 'Home Simple' })).toBeInTheDocument()

    await user.unhover(homeBtn)
    expect(screen.queryByRole('link', { name: 'Home Simple' })).not.toBeInTheDocument()
  })

  it('shows dropdown items on hover for Shop', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const shopBtn = screen.getByRole('button', { name: /^Shop/ })
    await user.hover(shopBtn)

    expect(screen.getByRole('link', { name: 'Grid Layout' })).toBeInTheDocument()
  })

  it('renders the Categories button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Categories' })).toBeInTheDocument()
  })
})
