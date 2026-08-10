import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { brandName, menuCloseLabel, menuOpenLabel, navLinks } from '../data'

describe('Navbar', () => {
  it('renders the lowercase brand and the desktop links with Home active', () => {
    render(<Navbar />)

    const banner = screen.getByRole('banner')
    expect(banner).toHaveClass('bg-black', 'lg:bg-transparent')

    const brand = screen.getByRole('link', { name: brandName })
    expect(brand).toHaveClass('text-white', 'lg:text-ink')

    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    for (const link of navLinks) {
      const navLink = within(mainNav).getByRole('link', { name: link })
      expect(navLink).toHaveClass('border-l', 'font-medium')
      if (link === 'Home') {
        expect(navLink).toHaveAttribute('aria-current', 'page')
        expect(navLink).toHaveClass('text-accent')
      } else {
        expect(navLink).toHaveClass('text-black')
      }
    }
  })

  it('toggles the mobile menu via the Menu burger with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const burger = screen.getByRole('button', { name: menuOpenLabel })
    expect(burger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(burger)

    expect(screen.getByRole('button', { name: menuCloseLabel })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const link of navLinks) {
      expect(within(mobileNav).getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(mobileNav.querySelector('a')).toHaveClass('text-white')

    await user.click(screen.getByRole('button', { name: menuCloseLabel }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: menuOpenLabel }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('link', { name: 'About' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
