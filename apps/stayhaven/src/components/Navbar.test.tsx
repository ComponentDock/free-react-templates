import { render, screen, fireEvent, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the brand, anchor links and the Get Started pill', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: 'StayHaven' })
    expect(brand).toHaveAttribute('href', '#home')
    expect(brand.querySelector('.text-brand')).toHaveTextContent('Stay')

    for (const link of NAV_LINKS) {
      const links = screen.getAllByRole('link', { name: link.label })
      expect(links.length).toBeGreaterThanOrEqual(1)
      expect(links[0]).toHaveAttribute('href', link.href)
    }

    const pills = screen.getAllByRole('link', { name: 'Get Started' })
    expect(pills.length).toBeGreaterThanOrEqual(1)
    expect(pills[0]).toHaveAttribute('href', '#booking')
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const nav = screen.getByRole('navigation', { name: 'Main' })
    expect(nav).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(nav).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(within(mobileNav).getByRole('link', { name: 'Get Started' })).toHaveAttribute(
      'href',
      '#booking',
    )

    // Clicking a mobile link closes the panel. A native preventDefault keeps
    // jsdom hash navigation from racing the React handler.
    const homeLink = within(mobileNav).getByRole('link', { name: 'Home' })
    homeLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(homeLink)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    // Reopen and close via the mobile Get Started pill.
    await user.click(menuButton)
    const reopened = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const getStarted = within(reopened).getByRole('link', { name: 'Get Started' })
    getStarted.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(getStarted)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
