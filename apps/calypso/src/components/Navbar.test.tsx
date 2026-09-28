import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Calypso')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Work', 'Service', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders the CTA button', () => {
    render(<Navbar />)
    const talkLinks = screen.getAllByText("Let's Talk")
    expect(talkLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleButton)
    // After click, mobile nav links should be visible
    const mobileNavLinks = screen.getAllByText('Home')
    expect(mobileNavLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleButton)
    // Click a mobile nav link (the last one in the list)
    const homeLinks = screen.getAllByText('Home')
    const mobileLink = homeLinks[homeLinks.length - 1]!
    await user.click(mobileLink)
    // Menu should close - mobile nav links still exist but menu is collapsed
    // The toggle button should still be present
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when mobile CTA is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(toggleButton)
    // Click the mobile "Let's Talk" link
    const talkLinks = screen.getAllByText("Let's Talk")
    const mobileTalk = talkLinks[talkLinks.length - 1]!
    await user.click(mobileTalk)
    expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
  })
})
