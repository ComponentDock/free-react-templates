import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
describe('Navbar', () => {
  it('renders the logo and all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /MODISTA/i })).toBeInTheDocument()
    for (const link of ['Home', 'Pages', 'Shop', 'Blog', 'Lookbook', 'Contact']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    const mobileNav = screen.getAllByRole('link', { name: 'Home' })
    expect(mobileNav.length).toBeGreaterThanOrEqual(2)
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    // Find the mobile Blog link (the second one since desktop is hidden in mobile but still in DOM)
    const blogLinks = screen.getAllByRole('link', { name: 'Blog' })
    // The mobile link is the last one (desktop is hidden via CSS but still in DOM)
    await user.click(blogLinks.at(-1)!)
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
  it('renders the search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
  it('renders the Home dropdown variants', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: 'Home' })
    await user.hover(homeLink)
    expect(screen.getByText('Home Simple')).toBeInTheDocument()
    expect(screen.getByText('Carousel')).toBeInTheDocument()
    expect(screen.getByText('Fullwidth')).toBeInTheDocument()
    expect(screen.getByText('Parallax')).toBeInTheDocument()
  })
})
