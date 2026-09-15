import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from '../components/Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Warehaus')).toBeInTheDocument()
  })

  it('renders all nav links in desktop nav', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    for (const link of ['Home', 'Shop', 'About', 'Blog', 'Contact']) {
      const links = within(nav).getAllByText(link)
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders cart icon with badge', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)
    // After toggle, the mobile links container should exist
    // Use getAllByText and check length increased
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
  })
})
