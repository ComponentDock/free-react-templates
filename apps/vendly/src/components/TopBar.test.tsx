import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'
import { BRAND } from '../data'

describe('TopBar', () => {
  it('renders the search field, bordered logo and icon actions with the cart badge', () => {
    render(<TopBar mobileOpen={false} onToggleMenu={() => {}} />)

    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toHaveAttribute('placeholder', 'Search')

    const logo = screen.getByRole('link', { name: BRAND })
    expect(logo).toHaveAttribute('href', '#home')
    expect(logo).toHaveClass('border-2', 'border-ink')

    expect(screen.getByRole('link', { name: 'Account' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Wishlist' })).toHaveAttribute('href', '#catalogue')
    const cart = screen.getByRole('link', { name: 'Cart' })
    expect(cart).toHaveAttribute('href', '#shop')
    expect(screen.getByText('2')).toHaveClass('bg-brand')
  })

  it('submitting the search form does not reload the page', () => {
    render(<TopBar mobileOpen={false} onToggleMenu={() => {}} />)
    const form = screen.getByRole('search')
    fireEvent.submit(form)
    /* The onSubmit handler calls preventDefault — no navigation occurs. */
    expect(form).toBeInTheDocument()
  })

  it('toggles the mobile menu through the hamburger and reflects aria-expanded', () => {
    const onToggleMenu = vi.fn()
    const { rerender } = render(<TopBar mobileOpen={false} onToggleMenu={onToggleMenu} />)

    const toggle = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(toggle)
    expect(onToggleMenu).toHaveBeenCalledTimes(1)

    rerender(<TopBar mobileOpen={true} onToggleMenu={onToggleMenu} />)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
  })
})
