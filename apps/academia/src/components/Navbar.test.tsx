import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { PHONE_DISPLAY } from '../data'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the wordmark, centered nav links, login link and phone pill', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /Academia/ })
    expect(brand).toBeInTheDocument()
    expect(document.querySelector('nav svg.lucide-book-open')).toBeInTheDocument()

    for (const label of ['Home', 'Courses', 'Pages', 'About', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    expect(screen.getByRole('link', { name: /Log in/ })).toBeInTheDocument()
    expect(document.querySelector('nav svg.lucide-user')).toBeInTheDocument()

    const phone = screen.getByRole('link', { name: PHONE_DISPLAY })
    expect(phone).toHaveAttribute('href', 'tel:' + PHONE_DISPLAY.replace(/[^\d+]/g, ''))
    expect(document.querySelector('nav svg.lucide-phone')).toBeInTheDocument()
  })

  it('marks the active Home link and shows the teal underline', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    // Desktop link carries aria-current; the mobile copy does not.
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'true')
    expect(homeLinks[0]?.className).toMatch(/after:bg-brand/)
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
    // Mobile panel mirrors the desktop links (desktop set stays visible).
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(1)
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(menuButton)
    const mobileAbout = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileAbout.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileAbout)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
