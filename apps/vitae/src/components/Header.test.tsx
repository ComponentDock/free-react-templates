import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'
import { brand, navLeft, navRight } from '../data'

describe('Header', () => {
  it('renders the left nav, centered logo and right nav', () => {
    render(<Header />)
    expect(screen.getByRole('navigation', { name: 'Left' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Right' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: `${brand.name}.` })).toHaveAttribute(
      'href',
      '#home-section',
    )
    for (const item of navLeft) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }
    for (const item of navRight) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute('href', item.href)
    }
  })

  it('starts transparent and becomes sticky with a white background on scroll', () => {
    const { container } = render(<Header />)
    const header = container.querySelector('[data-testid="sticky-header"]') as HTMLElement
    expect(header).not.toHaveClass('bg-white')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-white')
    expect(header).toHaveClass('shadow-[4px_0_20px_-5px_rgba(0,0,0,0.1)]')
  })

  it('cleans up the scroll listener on unmount', () => {
    const { unmount } = render(<Header />)
    const spy = vi.spyOn(window, 'removeEventListener')
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })

  it('opens the mobile menu and closes it via the close button', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('shows all nav links inside the mobile panel', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    for (const item of [...navLeft, ...navRight]) {
      expect(mobileNav.querySelector(`a[href="${item.href}"]`)).toHaveTextContent(item.label)
    }
  })

  it('closes the mobile menu when a link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const link = screen
      .getByRole('navigation', { name: 'Mobile' })
      .querySelector('a[href="#about-section"]') as HTMLElement

    fireEvent.click(link)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
