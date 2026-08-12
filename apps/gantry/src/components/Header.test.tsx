import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  it('shows the brand, the three contact columns and the orange navbar entries', () => {
    render(<Header />)

    const header = screen.getByRole('banner', { name: 'Site header' })
    expect(within(header).getByText('Gantry')).toBeInTheDocument()
    expect(within(header).getByText('San Francisco')).toBeInTheDocument()
    expect(within(header).getByText('000 209 392 312')).toBeInTheDocument()
    expect(within(header).getByText('info@gmail.com')).toBeInTheDocument()

    const desktopNav = within(header).getByRole('navigation', { name: 'Primary', hidden: true })
    const links = within(desktopNav).getAllByRole('link', { hidden: true })
    expect(links.map((l) => l.textContent)).toEqual([
      'Home',
      'About Us',
      'Our Projects',
      'Testimonials',
      'Blog',
      'Contact',
    ])
    expect(links[0]).toHaveAttribute('aria-current', 'true')
  })

  it('opens and closes the mobile menu via the hamburger', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getAllByRole('link')).toHaveLength(6)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
