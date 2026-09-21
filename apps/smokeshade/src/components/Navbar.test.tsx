import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Smokeshade')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Gallery')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('has a mobile hamburger button', () => {
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })
    expect(button).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })

    // Initially one set of nav links (desktop)
    expect(screen.queryAllByText('Home').length).toBe(1)

    await user.click(button)

    // Mobile nav opens - now 2 sets
    expect(screen.queryAllByText('Home').length).toBe(2)

    await user.click(button)

    // Toggled back
    expect(screen.queryAllByText('Home').length).toBe(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const button = screen.getByRole('button', { name: /toggle menu/i })

    await user.click(button)
    expect(screen.queryAllByText('Home').length).toBe(2)

    // Click a mobile nav link to close
    const mobileLinks = screen.getAllByText('Contact')
    await user.click(mobileLinks[mobileLinks.length - 1]!)

    // Menu closed
    expect(screen.queryAllByText('Home').length).toBe(1)
  })
})
