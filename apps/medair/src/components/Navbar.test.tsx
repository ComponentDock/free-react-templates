import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, six desktop nav links, and a mobile trigger', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'Medair' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThanOrEqual(1)
    }
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('turns solid dark once the page is scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')

    expect(header.className).toContain('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 200, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(header.className).toContain('bg-dark')
    expect(header.className).toContain('shadow-lg')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-transparent')
  })

  it('opens and closes the mobile menu with the same links', () => {
    render(<Navbar />)

    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile navigation' })
    for (const label of ['Home', 'About', 'Services', 'Gallery', 'Blog', 'Contact']) {
      expect(mobileNav).toHaveTextContent(label)
    }
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu when a link inside it is activated', () => {
    render(<Navbar />)

    fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile navigation' })).toBeInTheDocument()

    const contactLinks = screen.getAllByRole('link', { name: 'Contact' })
    fireEvent.click(contactLinks[1]!)
    expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
  })
})
