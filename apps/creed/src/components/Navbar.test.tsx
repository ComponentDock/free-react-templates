import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Creed')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    for (const link of ['Home', 'Ministries', 'Sermons', 'Blog', 'Contact']) {
      expect(within(nav).getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the send donations button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /send donations/i })).toBeInTheDocument()
  })

  it('shows the next big event text', () => {
    render(<Navbar />)
    expect(screen.getByText('Next Big Event:')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const { userEvent } = await import('@testing-library/user-event')
    const user = userEvent.setup()
    render(<Navbar />)

    // Open mobile menu
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    // Click a link in the mobile menu (the one inside the mobile dropdown)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
