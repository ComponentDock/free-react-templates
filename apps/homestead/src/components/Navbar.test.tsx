import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { brandName, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the text logo with an accent span and all dark desktop links', () => {
    render(<Navbar />)
    const brand = screen.getByRole('link', { name: 'Homestead home' })
    expect(brand).toHaveTextContent(brandName)
    expect(brand.querySelector('span')).toHaveClass('text-gold')

    const desktopNav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(within(desktopNav).getAllByRole('link')).toHaveLength(navLinks.length)
    for (const link of navLinks) {
      expect(within(desktopNav).getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      )
    }
    // Home is the active link (pink), the rest are dark.
    const home = within(desktopNav).getByRole('link', { name: 'Home' })
    expect(home).toHaveAttribute('aria-current', 'true')
    expect(home.className).toContain('text-brand')
  })

  it('opens and closes the mobile menu with aria-expanded reflecting the state', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(within(mobileNav).getAllByRole('link').length).toBe(navLinks.length)

    // jsdom hash-navigation guard: native listener prevents navigation but the
    // React onClick (close menu) still fires.
    const aboutLink = within(mobileNav).getByRole('link', { name: 'About' })
    aboutLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(aboutLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
