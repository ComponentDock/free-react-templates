import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import { Header } from './Header'

describe('Header', () => {
  it('shows the Alpinora brand and primary navigation over the hero', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('absolute', 'top-0', 'z-50')
    expect(header).toHaveClass('lg:bg-transparent')
    expect(screen.getByText('Alpinora')).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Service', 'Gallery', 'Faq', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
  })

  it('opens the Pages dropdown with Generic and Elements and closes it again', () => {
    render(<Header />)
    const pages = screen.getByRole('button', { name: 'Pages' })
    expect(pages).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(pages)
    expect(pages).toHaveAttribute('aria-expanded', 'true')
    const dropdown = screen.getByRole('navigation', { name: 'Pages' })
    expect(within(dropdown).getByRole('link', { name: 'Generic' })).toBeInTheDocument()
    expect(within(dropdown).getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    fireEvent.click(within(dropdown).getByRole('link', { name: 'Generic' }))
    expect(pages).toHaveAttribute('aria-expanded', 'false')
  })

  it('turns the header solid once the page scrolls', () => {
    render(<Header />)
    const header = screen.getByRole('banner')
    expect(header).toHaveClass('lg:bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 300, configurable: true })
    fireEvent.scroll(window)
    expect(header).toHaveClass('bg-ink')
    expect(header).not.toHaveClass('lg:bg-transparent')
    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true })
  })

  it('toggles the mobile menu with aria-expanded and closes on link click', () => {
    render(<Header />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobile = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobile).toHaveClass('bg-ink')
    fireEvent.click(within(mobile).getByRole('link', { name: 'Contact' }))
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the desktop nav menu state when a nav link is clicked', () => {
    render(<Header />)
    fireEvent.click(screen.getByRole('link', { name: 'Home' }))
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })
})
