import { describe, expect, it } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    const links = ['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the logo', () => {
    render(<Navbar />)
    expect(screen.getByText('Brush')).toBeInTheDocument()
    expect(screen.getByText('mark')).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('renders scrolled menu icon with text-ink class', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const closeBtn = screen.getByRole('button', { name: /close menu/i })
    expect(closeBtn.querySelector('svg')?.getAttribute('class')).toContain('text-ink')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const homeLinks = screen.getAllByText('Home')
    const lastHome = homeLinks.at(-1)
    await user.click(lastHome!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('adds scrolled class on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const header = screen.getByRole('banner')
    expect(header.className).toContain('bg-white')
  })
})
