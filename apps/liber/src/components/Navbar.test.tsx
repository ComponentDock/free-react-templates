import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the site name and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Liber/i })).toBeInTheDocument()
    for (const link of ['Home', 'About', 'Features', 'Pricing', 'Courses']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('toggles mobile menu open and closed via the X button', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByLabelText('Mobile navigation')).toBeInTheDocument()

    // Click a mobile-only link (the ones inside the mobile nav)
    const mobileLinks = screen.getAllByRole('link', { name: 'About' })
    // The second "About" link is in the mobile nav
    await user.click(mobileLinks[1]!)
    expect(screen.queryByLabelText('Mobile navigation')).not.toBeInTheDocument()
  })
})
