import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'
import { navLinks, quickContact } from '../data'

const scrollTo = (y: number) => {
  Object.defineProperty(window, 'scrollY', { value: y, configurable: true, writable: true })
  fireEvent.scroll(window)
}

describe('Header', () => {
  it('renders the logo, quick contact and nav links', () => {
    render(<Header />)
    const logo = screen.getByRole('link', { name: /^Emblem\.$/ })
    expect(logo).toHaveAttribute('href', '#home')
    expect(screen.getByText(quickContact.address)).toBeInTheDocument()
    expect(screen.getByText(quickContact.hours)).toBeInTheDocument()
    for (const link of navLinks) {
      expect(screen.getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
    }
  })

  it('renders social icon links with accessible names', () => {
    render(<Header />)
    expect(screen.getAllByRole('link', { name: 'Facebook' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Twitter' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'LinkedIn' }).length).toBeGreaterThan(0)
  })

  it('marks the active nav link', () => {
    render(<Header />)
    const home = screen.getAllByRole('link', { name: 'Home' })[0]
    expect(home).toHaveClass('text-brand')
  })

  it('becomes sticky with a white background after scrolling', () => {
    render(<Header />)
    const header = document.querySelector('header')!
    expect(header).not.toHaveClass('fixed')
    scrollTo(200)
    expect(header).toHaveClass('fixed', 'bg-white')
    scrollTo(0)
    expect(header).not.toHaveClass('fixed')
  })

  it('toggles the mobile menu with aria-expanded', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle navigation menu' })
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileLink = screen.getAllByRole('link', { name: 'Services' }).at(-1)!
    await user.click(mobileLink)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('removes the scroll listener on unmount', () => {
    const spy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Header />)
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
