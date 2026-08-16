import { act, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

describe('Header', () => {
  it('renders the brand logo box and all nav links', () => {
    render(<Header />)
    expect(screen.getByRole('link', { name: 'Stalwart' })).toBeInTheDocument()
    const nav = screen.getByRole('navigation', { name: 'Primary' })
    for (const label of ['Home', 'Service', 'Project', 'About', 'Blog', 'Contact']) {
      expect(within(nav).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the search control and the Free Quote button', () => {
    render(<Header />)
    expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Free Quote' })).toBeInTheDocument()
  })

  it('turns the bar red (sticky) once the page is scrolled', () => {
    const originalScrollY = window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true, configurable: true })
    render(<Header />)
    const header = document.querySelector('header')
    expect(header).not.toHaveClass('bg-brand')
    act(() => {
      window.scrollY = 200
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).toHaveClass('bg-brand')
    act(() => {
      window.scrollY = 0
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header).not.toHaveClass('bg-brand')
    Object.defineProperty(window, 'scrollY', {
      value: originalScrollY,
      writable: true,
      configurable: true,
    })
  })

  it('opens and closes the mobile menu via the hamburger control', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const serviceLink = within(mobileNav).getByRole('link', { name: 'Service' })
    serviceLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(serviceLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the mobile Free Quote button is chosen', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    const quoteLink = within(mobileNav).getByRole('link', { name: 'Free Quote' })
    quoteLink.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await user.click(quoteLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('cleans up the scroll listener on unmount', () => {
    const removeSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
