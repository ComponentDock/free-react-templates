import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders all nav links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /resume/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('renders brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Curriculo')).toBeInTheDocument()
  })

  it('renders dark mode toggle', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /switch to dark mode/i })).toBeInTheDocument()
  })

  it('toggles dark mode on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /switch to dark mode/i })
    await user.click(toggle)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const menuBtn = screen.getByRole('button', { name: /toggle navigation/i })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.click(screen.getByRole('button', { name: /toggle navigation/i }))
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('clicking mobile nav link closes menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: /toggle navigation/i }))
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    // The mobile menu has its own set of links; click the second "Home" link (mobile one)
    const mobileLinks = screen.getAllByRole('link', { name: /home/i })
    await user.click(mobileLinks[1]!)
    expect(screen.getByRole('button', { name: /toggle navigation/i })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('scroll event changes navbar background', async () => {
    render(<Navbar />)
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    window.dispatchEvent(new Event('scroll'))
    await screen.findByRole('navigation', { name: /main navigation/i })
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav.className).toContain('bg-white')
  })
})
