import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'Services', 'Portfolio', 'Team', 'Price', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByRole('link', { name: link })).toHaveAttribute(
        'href',
        `#${link.toLowerCase()}`,
      )
    }
  })

  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Acumen')).toBeInTheDocument()
  })

  it('has search button', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closes on link click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: 'Menu' })
    await user.click(menuBtn)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBe(2)
    await user.click(homeLinks[1]!)
  })

  it('adds background class on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toHaveClass('bg-transparent')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(nav).toHaveClass('bg-white')
  })
})
