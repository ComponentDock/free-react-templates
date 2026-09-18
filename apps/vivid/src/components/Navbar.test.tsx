import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'
import { describe, expect, it } from 'vitest'

describe('Navbar', () => {
  it('renders the Vivid logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Vivid')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Portfolio', 'Services', 'Prices', 'Team', 'Blog', 'Contact']
    links.forEach((label) => {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('renders with transparent background initially', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(screen.getAllByText('Home').length).toBe(1)

    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBe(2)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getAllByText('Home').length).toBe(1)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))
    expect(screen.getAllByText('Home').length).toBe(2)

    const homeLinks = screen.getAllByText('Home')
    await user.click(homeLinks[1]!)
    expect(screen.getAllByText('Home').length).toBe(1)
  })

  it('adds dark background on scroll', async () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation')
    expect(nav.className).toContain('bg-transparent')

    await act(async () => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
      window.dispatchEvent(new Event('scroll'))
    })

    expect(nav.className).toContain('bg-dark-bg')
  })
})
