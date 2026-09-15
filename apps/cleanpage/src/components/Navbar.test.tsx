import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Cleanpage').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Work', 'Pricing', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // After opening, links exist in both desktop and mobile menus
    const homes = screen.getAllByText('Home')
    expect(homes.length).toBeGreaterThanOrEqual(2)
    await user.click(toggle)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Click a mobile menu link (the second "Home" is in the mobile menu)
    const homes = screen.getAllByText('Home')
    await user.click(homes[1]!)
    // Menu should close — only 1 Home visible (desktop)
    expect(screen.getAllByText('Home')).toHaveLength(1)
  })
})
