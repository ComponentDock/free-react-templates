import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo and desktop nav links', () => {
    render(<Navbar />)

    expect(screen.getByText('syllabus')).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(within(nav).getByText('Home')).toBeInTheDocument()
    expect(within(nav).getByText('About Us')).toBeInTheDocument()
    expect(within(nav).getByText('Courses')).toBeInTheDocument()
    expect(within(nav).getByText('Elements')).toBeInTheDocument()
    expect(within(nav).getByText('News')).toBeInTheDocument()
    expect(within(nav).getByText('Contact')).toBeInTheDocument()
  })

  it('renders the phone number', () => {
    render(<Navbar />)
    expect(screen.getByText('+123 456 7890')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    expect(mobileNav).toBeInTheDocument()

    // Close button should now be visible
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeBtn)

    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const hamburger = screen.getByRole('button', { name: /open menu/i })
    await user.click(hamburger)

    const mobileLinks = screen.getAllByText('About Us')
    // Second instance is the mobile nav link (first is desktop)
    const aboutLink = mobileLinks[1]!
    await user.click(aboutLink)

    expect(screen.queryByRole('navigation', { name: /mobile navigation/i })).not.toBeInTheDocument()
  })
})
