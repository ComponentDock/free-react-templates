import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the Elixir logo', () => {
    render(<Navbar />)
    expect(screen.getByText(/Elixir/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact/i })).toBeInTheDocument()
  })

  it('renders search and cart icons', () => {
    render(<Navbar />)
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Shopping cart/i })).toBeInTheDocument()
  })

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /Close menu/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /Mobile/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: /Open menu/i })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: /Mobile/i })
    const link = mobileNav.querySelector('a')
    if (link) {
      link.addEventListener('click', (e) => e.preventDefault(), { once: true })
      await user.click(link)
    }
    expect(screen.queryByRole('navigation', { name: /Mobile/i })).not.toBeInTheDocument()
  })

  it('displays cart badge with item count', () => {
    render(<Navbar />)
    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
