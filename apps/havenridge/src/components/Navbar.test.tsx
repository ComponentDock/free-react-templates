import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the Havenridge logo', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Havenridge' })).toBeInTheDocument()
  })

  it('renders all navigation links in desktop nav', () => {
    render(<Navbar />)
    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    for (const label of ['Home', 'About', 'Services', 'Agent', 'Blog', 'Contact']) {
      expect(desktopNav).toHaveTextContent(label)
    }
  })

  it('renders the Get Started CTA button', () => {
    render(<Navbar />)
    const getStartedLinks = screen.getAllByRole('link', { name: 'Get Started' })
    expect(getStartedLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('toggles the mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)

    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })
})
