import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Kindfund')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Cause')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Donate Now')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile navigation')
    const aboutLink = within(mobileNav).getByText('About')
    await user.click(aboutLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes mobile menu when Donate Now is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByLabelText('Mobile navigation')
    const donateLink = within(mobileNav).getByText('Donate Now')
    await user.click(donateLink)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
