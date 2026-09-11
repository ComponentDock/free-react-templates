import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all nav links', () => {
    render(<Navbar />)
    for (const label of ['Home', 'About', 'Projects', 'Services', 'Blog', 'Contact']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('Home link is highlighted', () => {
    render(<Navbar />)
    const home = screen.getByText('Home')
    expect(home.className).toContain('text-brand')
  })

  it('applies scrolled styles on scroll', () => {
    render(<Navbar />)
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    const nav = screen.getByRole('navigation', { name: /primary/i })
    expect(nav.className).toContain('shadow-lg')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const aboutLinks = screen.getAllByText('About')
    await user.click(aboutLinks[1]!)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('renders search input', () => {
    render(<Navbar />)
    const inputs = screen.getAllByLabelText('Search')
    expect(inputs.length).toBeGreaterThanOrEqual(1)
  })

  it('cleans up scroll listener on unmount', () => {
    const spy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = render(<Navbar />)
    unmount()
    expect(spy).toHaveBeenCalledWith('scroll', expect.any(Function))
    spy.mockRestore()
  })
})
