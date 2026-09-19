import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />)
    expect(screen.getByText('Treklore')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    for (const link of ['Home', 'About us', 'Services', 'News', 'Contact']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders phone number', () => {
    render(<Header />)
    expect(screen.getByText(/Call us: 00-56 445 678 33/)).toBeInTheDocument()
  })

  it('renders social icons with accessible labels', () => {
    render(<Header />)
    for (const name of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn']) {
      expect(screen.getByLabelText(name)).toBeInTheDocument()
    }
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const btn = screen.getByRole('button', { name: /open menu/i })
    expect(screen.queryByText('Home')).toBeVisible() // visible in desktop nav

    await user.click(btn)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)

    // Open mobile menu
    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Click a mobile nav link (get the last "Home" which is the mobile one)
    const mobileLinks = screen.getAllByText('Home')
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)

    // Menu should close
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
