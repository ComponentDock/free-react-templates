import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<Navbar />)
    expect(screen.getAllByText('Batterly').length).toBeGreaterThanOrEqual(1)
    const primaryNav = screen.getByRole('navigation', { name: 'Primary' })
    expect(primaryNav.textContent).toContain('Home')
    expect(primaryNav.textContent).toContain('Product')
    expect(primaryNav.textContent).toContain('About')
    expect(primaryNav.textContent).toContain('Blog')
    expect(primaryNav.textContent).toContain('Contact')
  })

  it('shows phone number and order button', () => {
    render(<Navbar />)
    expect(screen.getAllByText('+10 (56) 745 3095').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Order Online')).toBeDefined()
  })

  it('has a sticky header', () => {
    const { container } = render(<Navbar />)
    const header = container.querySelector('header')
    expect(header?.className).toContain('sticky')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav.className).toContain('hidden')
    await user.click(toggle)
    expect(mobileNav.className).toContain('block')
    expect(screen.getByRole('button', { name: /close menu/i })).toBeDefined()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(mobileNav.className).not.toContain('block')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav.className).toContain('block')
    // Click a link inside the mobile nav to close it
    const mobileLinks = mobileNav.querySelectorAll('a')
    const firstLink = mobileLinks[0]
    expect(firstLink).toBeDefined()
    await user.click(firstLink!)
    expect(mobileNav.className).not.toContain('block')
  })
})
