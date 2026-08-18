import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the top announcement bar with socials and a search field', () => {
    render(<Navbar />)
    expect(
      screen.getByText('Now Hiring: Are you a driven and motivated 1st Line IT Support Engineer?'),
    ).toBeInTheDocument()
    for (const label of ['Facebook', 'X', 'LinkedIn', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringContaining('http'),
      )
    }
    expect(screen.getByRole('searchbox', { name: 'Search' })).toHaveAttribute(
      'placeholder',
      'Search or enter website name',
    )
  })

  it('renders the brand, desktop nav links, Free Quote button, and phone line', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(screen.getByRole('link', { name: /NETORA/ })).toHaveAttribute('href', '#home')
    for (const label of ['Home', 'About', 'Services', 'Case Study', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('button', { name: 'Blog' })).toBeInTheDocument()
    const quote = screen.getByRole('link', { name: 'Free Quote' })
    expect(quote).toHaveAttribute('href', '#contact')
    expect(quote.className).toContain('border-2 border-brand')
    expect(quote.className).toContain('hover:bg-brand hover:text-white')
    const phone = screen.getByRole('link', { name: /Call:/ })
    expect(phone).toHaveAttribute('href', 'tel:+23923929210')
    expect(screen.getByText('Have any Question?')).toBeInTheDocument()
  })

  it('opens and closes the Blog dropdown in the desktop nav', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blogButton = screen.getByRole('button', { name: 'Blog' })
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
    await user.click(blogButton)
    expect(blogButton).toHaveAttribute('aria-expanded', 'true')
    for (const item of ['Blog', 'Blog Details', 'Elements']) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    await user.click(screen.getByRole('link', { name: 'Blog Details' }))
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
    expect(blogButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens and closes the mobile menu with its own Blog submenu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('button', { name: 'Blog' }))
    expect(within(mobileNav).getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'Elements' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(
      within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('link', {
        name: 'Home',
      }),
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
