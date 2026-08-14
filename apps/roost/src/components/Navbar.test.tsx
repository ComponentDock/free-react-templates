import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { NAV_LINKS } from '../data'

describe('Navbar', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the ROOST wordmark and the six menu links', () => {
    render(<Navbar />)

    const brand = screen.getByRole('link', { name: /Roost/ })
    expect(brand).toBeInTheDocument()

    for (const link of NAV_LINKS) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('marks the active Home link in the desktop and mobile menus', () => {
    render(<Navbar />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks[0]).toHaveAttribute('aria-current', 'page')
    expect(homeLinks[0]?.className).toMatch(/text-brand/)
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)

    const header = document.querySelector('header')!
    expect(header).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('opens and closes the off-canvas mobile panel', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    expect(openButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(openButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    const closeButton = screen.getByRole('button', { name: 'Close menu' })
    await user.click(closeButton)
    expect(openButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the off-canvas panel when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const openButton = screen.getByRole('button', { name: 'Open menu' })
    await user.click(openButton)
    const mobileContact = screen.getAllByRole('link', { name: 'Contact' })[1]!
    mobileContact.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileContact)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
