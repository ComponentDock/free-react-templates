import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand logo and name', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /fitlane/i })).toBeInTheDocument()
  })

  it('renders all navigation links in desktop menu', () => {
    render(<Navbar />)
    const links = ['Home', 'About Us', 'Classes', 'Pricing', 'Contact']
    for (const label of links) {
      const found = screen.getAllByRole('link', { name: label })
      expect(found.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('toggles mobile menu on button click', async () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: /close menu/i }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a link is clicked', async () => {
    render(<Navbar />)
    await userEvent.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    const mobileLinks = screen.getAllByRole('link', { name: /classes/i })
    // The last one is in the mobile menu (hidden by max-h-0)
    const lastLink = mobileLinks[mobileLinks.length - 1]
    if (lastLink) {
      await userEvent.click(lastLink)
    }

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })
})
