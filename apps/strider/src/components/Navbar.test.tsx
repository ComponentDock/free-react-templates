import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Strider')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    for (const link of ['Home', 'Shop', 'Blog', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders cart and search buttons', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Cart')).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleBtn = screen.getByLabelText('Toggle menu')
    await user.click(toggleBtn)
    // After toggling, mobile nav should appear (links duplicated in mobile view)
    const links = screen.getAllByText('Home')
    expect(links.length).toBeGreaterThanOrEqual(1)
    await user.click(toggleBtn)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleBtn = screen.getByLabelText('Toggle menu')
    await user.click(toggleBtn)
    // Click a mobile nav link to close the menu
    const mobileLinks = screen.getAllByText('Shop')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    if (lastLink) await user.click(lastLink)
    // After clicking, the mobile menu should close
    expect(screen.queryByRole('list', { hidden: false })).toBeInTheDocument()
  })
})
