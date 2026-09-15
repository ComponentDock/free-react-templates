import { fireEvent, render, screen, within } from '@testing-library/react'
import { afterAll, describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

const originalScrollY = Object.getOwnPropertyDescriptor(window, 'scrollY')

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Navbar', () => {
  it('renders the wordmark, menu links and Get Ticket button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Conclave home' })).toHaveTextContent('Conclave')
    const mainNav = screen.getByRole('navigation', { name: 'Main' })
    expect(within(mainNav).getByRole('link', { name: 'Home' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(within(mainNav).getByRole('link', { name: 'Speakers' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Schedule' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Gallery' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(mainNav).getByRole('link', { name: 'Get Ticket' })).toHaveAttribute(
      'href',
      '#pricing',
    )
  })

  it('turns solid with a shadow once the page is scrolled', () => {
    render(<Navbar />)
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-[#111429]/80')
    setScrollY(300)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-[#111429]')
    expect(header.className).toContain('shadow-')
    setScrollY(0)
    fireEvent.scroll(window)
    expect(header.className).toContain('bg-[#111429]/80')
  })

  it('toggles the mobile menu with an aria-expanded hamburger', () => {
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Toggle mobile menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Get Ticket' })).toHaveAttribute(
      'href',
      '#pricing',
    )
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Blog' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('closes the mobile menu after tapping the Get Ticket link', () => {
    render(<Navbar />)
    fireEvent.click(screen.getByRole('button', { name: 'Toggle mobile menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    fireEvent.click(within(mobileNav).getByRole('link', { name: 'Get Ticket' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})

afterAll(() => {
  if (originalScrollY) {
    Object.defineProperty(window, 'scrollY', originalScrollY)
  }
})
