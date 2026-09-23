import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Advocat')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /practice areas/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cases/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /blog/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)

    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    // Mobile menu should show links
    expect(screen.getAllByRole('link', { name: /home/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('closes menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggleBtn = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleBtn)

    const mobileLinks = screen.getAllByRole('link', { name: /about/i })
    // Click the last one (mobile menu link)
    const lastLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(lastLink)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
