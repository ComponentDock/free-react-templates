import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 1024,
    })
  })

  it('renders the centered wordmark logo with tagline and underline accent', () => {
    render(<Header />)
    const brand = screen.getAllByRole('link', { name: /Vintner/ })[0]!
    expect(brand).toHaveAttribute('href', '#home')
    expect(screen.getByText('Since 1985')).toBeInTheDocument()
    const underline = document.querySelector('header span[aria-hidden="true"]')
    expect(underline?.classList.contains('bg-brand')).toBe(true)
  })

  it('renders the five centered nav links with the Home link active', () => {
    render(<Header />)
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'About', 'Wines', 'Shop', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(within(nav).getByRole('link', { name: 'Home' })).toHaveAttribute('aria-current', 'true')
    expect(within(nav).getByRole('link', { name: 'About' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('opens and closes the mobile menu', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('lists the same five links in the mobile menu and closes on link click', async () => {
    Object.defineProperty(window, 'innerWidth', {
      configurable: true,
      value: 375,
    })
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'About', 'Wines', 'Shop', 'Contact']) {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument()
    }
    const winesLink = within(mobileNav).getByRole('link', { name: 'Wines' })
    winesLink.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(winesLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
