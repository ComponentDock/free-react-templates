import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText('Artful')).toBeInTheDocument()
    // Desktop nav links
    const homeLinks = screen.getAllByRole('link', { name: /Home/i })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const btn = screen.getByRole('button', { name: /Open menu/i })
    await user.click(btn)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /Close menu/i }))
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /Open menu/i }))
    // Click the mobile menu's Home link (last one in DOM)
    const homeLinks = screen.getAllByRole('link', { name: /Home/i })
    await user.click(homeLinks[homeLinks.length - 1]!)
    expect(screen.getByRole('button', { name: /Open menu/i })).toBeInTheDocument()
  })
})
