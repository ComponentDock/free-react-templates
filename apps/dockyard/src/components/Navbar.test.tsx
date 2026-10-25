import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', { configurable: true, value })
}

describe('Navbar', () => {
  it('is a 67px white bar with the wordmark and seven in-page items', () => {
    setScrollY(0)
    render(<Navbar />)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-stuck', 'false')
    expect(header.firstElementChild).toHaveClass('h-[99px]')

    const nav = screen.getByRole('navigation', { name: 'Main' })
    const links = within(nav).getAllByRole('link')
    expect(links).toHaveLength(navLinks.length)
    expect(links[0]).toHaveAttribute('aria-current', 'page')
    expect(links[0]).toHaveClass('text-brand')
    expect(links[1]).not.toHaveAttribute('aria-current')
    expect(links[1]).toHaveClass('text-ink')

    for (const link of links) {
      expect(link.getAttribute('href')).toMatch(/^#/)
    }
  })

  it('sticks to the top with a shadow and a blue wordmark once scrolled', () => {
    setScrollY(0)
    render(<Navbar />)

    setScrollY(240)
    fireEvent.scroll(window)

    const header = screen.getByRole('banner')
    expect(header).toHaveAttribute('data-stuck', 'true')
    expect(header).toHaveClass('fixed')
    expect(header.className).toContain('shadow-[4px_0_20px_-5px_rgba(0,0,0,0.2)]')
    expect(header.firstElementChild).toHaveClass('h-[67px]')
    expect(screen.getByRole('link', { name: 'Dockyard' })).toHaveClass('text-brand')
  })

  it('collapses into a drawer behind the toggle and closes on selection', () => {
    setScrollY(0)
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const drawer = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(drawer).getAllByRole('link')).toHaveLength(navLinks.length)

    fireEvent.click(within(drawer).getByRole('link', { name: 'Why Us' }))

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
