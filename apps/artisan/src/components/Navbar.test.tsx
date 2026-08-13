import { describe, it, expect } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the logo mark and brand', () => {
    render(<Navbar />)
    expect(screen.getByText('K')).toHaveClass('text-white')
    expect(screen.getByText('Artisan')).toBeInTheDocument()
  })

  it('renders every nav link in the desktop menu', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /primary/i })
    expect(nav).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Portfolio', 'Contact', 'Service', 'Portfolio Details']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('toggles the Pages dropdown to reveal Elements', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const pages = screen.getByRole('button', { name: /pages/i })
    await user.click(pages)
    expect(screen.getByRole('link', { name: 'Elements' })).toBeInTheDocument()
    await user.click(pages)
    expect(screen.queryByRole('link', { name: 'Elements' })).not.toBeInTheDocument()
  })

  it('toggles the Blog dropdown to reveal Blog Home and Blog Single', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const blog = screen.getByRole('button', { name: /blog/i })
    await user.click(blog)
    expect(screen.getByRole('link', { name: 'Blog Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog Single' })).toBeInTheDocument()
  })

  it('becomes fixed with a white background once scrolled', () => {
    render(<Navbar />)
    const header = screen.getByRole('banner')
    expect(header.className).toContain('absolute')
    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('fixed')
    expect(header.className).toContain('bg-white')
    expect(header.className).toContain('shadow')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    expect(mobileNav).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Service' })).toHaveLength(2)
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})
