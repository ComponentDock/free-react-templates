import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { header, navLinks, siteName } from '../data'

describe('Header', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    window.dispatchEvent(new Event('scroll'))
  })

  it('shows the wordmark, centered nav links, call line and Lets Talk pill', () => {
    render(<Header />)

    const brand = screen.getByRole('link', { name: siteName })
    expect(brand).toHaveAttribute('href', '#home')
    expect(document.querySelector('header svg.lucide-zap')).toBeInTheDocument()

    for (const label of navLinks.map((link) => link.label)) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }

    const phone = screen.getByRole('link', { name: `${header.phoneLabel} ${header.phoneDisplay}` })
    expect(phone).toHaveAttribute('href', 'tel:' + header.phoneDisplay.replace(/[^\d+]/g, ''))

    const talk = screen.getByRole('link', { name: header.ctaLabel })
    expect(talk).toHaveAttribute('href', '#contact')
  })

  it('opens and closes the Blog dropdown on hover and click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const blog = screen.getByRole('link', { name: /Blog/ })
    expect(blog).toHaveAttribute('aria-expanded', 'false')

    // Hover opens, leave closes.
    fireEvent.mouseEnter(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    // The nav link + the dropdown item both read "Blog".
    expect(screen.getAllByRole('link', { name: 'Blog' })).toHaveLength(2)
    expect(screen.getByRole('link', { name: 'Blog Details' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    fireEvent.mouseLeave(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'false')

    // Click toggles open; a dropdown link click closes it. (fireEvent is
    // used because user-event simulates hover first, which would trigger
    // onMouseEnter and change the state before the click lands.)
    blog.addEventListener('click', (event) => event.preventDefault(), { once: true })
    fireEvent.click(blog)
    expect(blog).toHaveAttribute('aria-expanded', 'true')
    const details = screen.getByRole('link', { name: 'Blog Details' })
    details.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(details)
    expect(blog).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('link', { name: 'Blog Details' })).not.toBeInTheDocument()
  })

  it('switches from transparent to solid on scroll and cleans up', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)

    const headerEl = document.querySelector('header')
    expect(headerEl).toHaveAttribute('data-variant', 'transparent')

    Object.defineProperty(window, 'scrollY', { value: 240, configurable: true })
    fireEvent.scroll(window)
    expect(headerEl).toHaveAttribute('data-variant', 'solid')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
    fireEvent.scroll(window)
    expect(headerEl).toHaveAttribute('data-variant', 'transparent')

    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })

  it('opens and closes the mobile menu and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Header />)

    const menuButton = screen.getByRole('button', { name: 'Toggle menu' })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    // Desktop + mobile copies of each main link, plus the Blog submenu.
    expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Blog Details' })).toHaveLength(1)

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    await user.click(menuButton)
    const mobileAbout = screen.getAllByRole('link', { name: 'About' })[1]!
    mobileAbout.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileAbout)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    // A mobile Blog submenu link closes the menu too.
    await user.click(menuButton)
    const mobileElements = screen.getByRole('link', { name: 'Elements' })
    mobileElements.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(mobileElements)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
