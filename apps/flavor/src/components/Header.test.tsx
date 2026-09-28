import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from './Header'
import { brand, navItems } from '../data'

describe('Header', () => {
  it('renders the brand logo with the brand name', () => {
    render(<Header />)
    expect(screen.getAllByRole('link', { name: brand.name }).length).toBeGreaterThan(0)
  })

  it('renders all desktop nav links', () => {
    render(<Header />)
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })

  it('starts transparent and gains the scrolled background after scrolling', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-black/80')
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

  it('closes the mobile menu when a top-level link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileHomeLink = homeLinks[homeLinks.length - 1]!

    fireEvent.click(mobileHomeLink)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when the backdrop is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    // The backdrop is the overlay div with bg-black/50 class
    const backdrop = screen.getByRole('presentation').querySelector('.bg-black\\/50') as HTMLElement
    fireEvent.click(backdrop)
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('renders all mobile nav links', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    for (const item of navItems) {
      expect(screen.getAllByRole('link', { name: item.label }).length).toBeGreaterThan(0)
    }
  })
})
