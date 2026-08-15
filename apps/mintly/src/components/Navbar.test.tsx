import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Navbar } from './Navbar'
import { navLinks } from '../data'

describe('Navbar', () => {
  it('renders the brand with a cross icon and the reference link set', () => {
    render(<Navbar menuOpen={false} onMenuToggle={vi.fn()} />)

    const brand = screen.getByRole('link', { name: /mintly/i })
    expect(brand).toHaveAttribute('href', '#home')
    expect(brand.querySelector('svg')).toBeInTheDocument()

    for (const link of navLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders user and search utility icons', () => {
    render(<Navbar menuOpen={false} onMenuToggle={vi.fn()} />)

    expect(screen.getByLabelText('Account')).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toBeInTheDocument()
  })

  it('renders a mobile toggle that reports aria-expanded and fires onMenuToggle', async () => {
    const user = userEvent.setup()
    const onMenuToggle = vi.fn()
    render(<Navbar menuOpen={false} onMenuToggle={onMenuToggle} />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(toggle).toHaveAttribute('aria-label', 'Open menu')

    await user.click(toggle)
    expect(onMenuToggle).toHaveBeenCalledTimes(1)
  })

  it('reports aria-expanded true when the menu is open', () => {
    render(<Navbar menuOpen onMenuToggle={vi.fn()} />)

    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })
})
